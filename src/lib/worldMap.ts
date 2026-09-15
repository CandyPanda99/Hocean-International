/**
 * Build-time geometry for the destinations map. Only import this from Server Components:
 * the projection runs once during rendering, so d3 and the atlas never reach the client bundle.
 */
import { geoEqualEarth, geoGraticule, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import worldAtlas from 'world-atlas/countries-110m.json';
import { wmxCountries } from '@/data/countries';

type LonLat = [number, number];

export type MapCountry = { id: string; name: string; d: string; zone?: number };
export type MapMarker = { code: string; name: string; zone: number; x: number; y: number };
export type MapRoute = {
  code: string;
  name: string;
  /** SriLankan flight number, for scheduled departures only. */
  flight?: string;
  kind: 'scheduled' | 'network';
  d: string;
  x: number;
  y: number;
};

export const MAP_WIDTH = 1000;

/** Country and graticule paths are stored at this multiple of map units; render them inside `scale(1 / GEOMETRY_SCALE)`. */
export const GEOMETRY_SCALE = 2;

/** Colombo, Bandaranaike International Airport (CMB). */
const ORIGIN: LonLat = [79.88, 7.18];

/** Mirrors the SriLankan Airlines departures listed in the flight schedule section. */
const SCHEDULED_ROUTES: { code: string; name: string; flight: string; at: LonLat }[] = [
  { code: 'BOM', name: 'Mumbai', flight: 'UL-0141', at: [72.87, 19.09] },
  { code: 'DEL', name: 'Delhi', flight: 'UL-0191', at: [77.1, 28.56] },
  { code: 'BLR', name: 'Bengaluru', flight: 'UL-0173 / UL-1173', at: [77.71, 13.2] },
  { code: 'SIN', name: 'Singapore', flight: 'UL-0306', at: [103.99, 1.36] },
  { code: 'LHR', name: 'London Heathrow', flight: 'UL-0503', at: [-0.45, 51.47] },
];

/** Illustrative rate-card destinations reached through the DHL Medical Express network. */
const NETWORK_ROUTES: { code: string; name: string; at: LonLat }[] = [
  { code: 'JFK', name: 'New York, USA', at: [-73.78, 40.64] },
  { code: 'GRU', name: 'São Paulo, Brazil', at: [-46.47, -23.43] },
  { code: 'JNB', name: 'Johannesburg, South Africa', at: [28.24, -26.14] },
  { code: 'DXB', name: 'Dubai, UAE', at: [55.36, 25.25] },
  { code: 'HKG', name: 'Hong Kong', at: [113.92, 22.31] },
  { code: 'HND', name: 'Tokyo, Japan', at: [139.78, 35.55] },
  { code: 'SYD', name: 'Sydney, Australia', at: [151.18, -33.94] },
];

/** ISO 3166-1 alpha-2 → numeric, which is how world-atlas identifies its features. */
const ISO_NUMERIC: Record<string, string> = {
  AF: '004', AL: '008', DZ: '012', AD: '020', AO: '024', AI: '660', AG: '028', AR: '032', AM: '051', AU: '036',
  AT: '040', AZ: '031', BH: '048', BD: '050', BB: '052', BE: '056', BT: '064', BO: '068', BR: '076', BN: '096',
  BG: '100', KH: '116', CA: '124', CL: '152', CN: '156', CO: '170', HR: '191', CY: '196', CZ: '203', DK: '208',
  EC: '218', EG: '818', EE: '233', ET: '231', FJ: '242', FI: '246', FR: '250', DE: '276', GH: '288', GR: '300',
  HK: '344', HU: '348', IN: '356', ID: '360', IE: '372', IL: '376', IT: '380', JP: '392', JO: '400', KE: '404',
  KR: '410', KW: '414', LA: '418', LV: '428', LT: '440', LU: '442', MO: '446', MY: '458', MV: '462', MT: '470',
  MU: '480', MX: '484', MA: '504', MM: '104', NP: '524', NL: '528', NZ: '554', NG: '566', NO: '578', OM: '512',
  PK: '586', PH: '608', PL: '616', PT: '620', QA: '634', RO: '642', SA: '682', SC: '690', SG: '702', SK: '703',
  SI: '705', ZA: '710', ES: '724', SE: '752', CH: '756', TW: '158', TZ: '834', TH: '764', TR: '792', AE: '784',
  GB: '826', US: '840', UG: '800', UA: '804', VN: '704', ZW: '716',
};

/** Rate-card countries too small for the 110m atlas - drawn as markers instead of shapes. */
const SMALL_COUNTRY_COORDS: Record<string, LonLat> = {
  AD: [1.52, 42.51], AI: [-63.07, 18.22], AG: [-61.8, 17.07], BB: [-59.54, 13.19], BH: [50.56, 26.07],
  HK: [114.17, 22.32], MO: [113.55, 22.2], MT: [14.45, 35.9], MU: [57.55, -20.35], MV: [73.22, 3.2],
  SC: [55.49, -4.68], SG: [103.82, 1.35],
};

const EXCLUDED_IDS = new Set(['010', '260']); // Antarctica, Fr. S. Antarctic Lands

const round = (value: number) => Math.round(value * 10) / 10;

/**
 * Re-encodes a d3 path (absolute `M x,y L x,y … Z`) as integer, relative coordinates at GEOMETRY_SCALE.
 * The inline SVG ships twice (HTML + RSC payload), so this roughly halves the page weight the map adds.
 */
function compactPath(d: string): string {
  let out = '';
  let px = 0;
  let py = 0;
  const push = (n: number) => {
    out += n < 0 || !/\d$/.test(out) ? `${n}` : ` ${n}`;
  };
  for (const [, command, args] of d.matchAll(/([MLZ])([^MLZ]*)/g)) {
    if (command === 'Z') {
      out += 'z';
      continue;
    }
    const [x, y] = args.split(',').map((n) => Math.round(Number(n) * GEOMETRY_SCALE));
    if (command === 'M') {
      out += 'M';
      push(x);
      push(y);
      out += 'l';
    } else {
      if (x === px && y === py) continue;
      push(x - px);
      push(y - py);
    }
    px = x;
    py = y;
  }
  return out.replace(/l(?=z|M|$)/g, '');
}

function buildWorldMap() {
  const topology = worldAtlas as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>;
  const collection = feature(topology, topology.objects.countries) as FeatureCollection<Geometry, { name: string }>;
  const land: Feature<Geometry, { name: string }>[] = collection.features.filter(
    (f) => !EXCLUDED_IDS.has(String(f.id)),
  );
  const landCollection: FeatureCollection<Geometry, { name: string }> = { type: 'FeatureCollection', features: land };

  const projection = geoEqualEarth().fitWidth(MAP_WIDTH, landCollection);
  const toPath = geoPath(projection).digits(1);
  const height = Math.ceil(toPath.bounds(landCollection)[1][1]);
  const project = (at: LonLat) => {
    const [x, y] = projection(at) ?? [0, 0];
    return { x: round(x), y: round(y) };
  };

  const rateCardByNumeric = new Map(wmxCountries.map((c) => [ISO_NUMERIC[c.code], c]));

  const countries: MapCountry[] = land.map((f) => {
    const rateCard = rateCardByNumeric.get(String(f.id));
    return {
      id: f.id !== undefined ? String(f.id) : f.properties.name,
      name: rateCard?.name ?? f.properties.name,
      zone: rateCard?.zone,
      d: compactPath(toPath(f) ?? ''),
    };
  });

  const markers: MapMarker[] = wmxCountries
    .filter((c) => SMALL_COUNTRY_COORDS[c.code])
    .map((c) => ({ code: c.code, name: c.name, zone: c.zone, ...project(SMALL_COUNTRY_COORDS[c.code]) }));

  const origin = project(ORIGIN);

  // Screen-space quadratic arc, bowed away from the equator side so routes read as flight paths.
  const arcTo = (x: number, y: number) => {
    const dx = x - origin.x;
    const dy = y - origin.y;
    const distance = Math.hypot(dx, dy);
    let nx = -dy / distance;
    let ny = dx / distance;
    if (ny > 0) {
      nx = -nx;
      ny = -ny;
    }
    const lift = Math.min(distance * 0.28, 120);
    const cx = round((origin.x + x) / 2 + nx * lift);
    const cy = round((origin.y + y) / 2 + ny * lift);
    return `M${origin.x},${origin.y}Q${cx},${cy} ${x},${y}`;
  };

  const routes: MapRoute[] = [
    ...SCHEDULED_ROUTES.map((r) => {
      const point = project(r.at);
      return {
        code: r.code,
        name: `${r.name} (${r.code})`,
        flight: r.flight,
        kind: 'scheduled' as const,
        d: arcTo(point.x, point.y),
        ...point,
      };
    }),
    ...NETWORK_ROUTES.map((r) => {
      const point = project(r.at);
      return {
        code: r.code,
        name: r.name,
        kind: 'network' as const,
        d: arcTo(point.x, point.y),
        ...point,
      };
    }),
  ];

  const graticule = compactPath(toPath(geoGraticule().step([20, 20])()) ?? '');

  return { width: MAP_WIDTH, height, countries, markers, routes, origin, graticule };
}

export const worldMap = buildWorldMap();
