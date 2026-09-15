import { GEOMETRY_SCALE, worldMap } from '@/lib/worldMap';
import MapHover from './MapHover';
import styles from './WorldMap.module.css';

const ZONES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SRI_LANKA_ID = '144';
const INDIA_CLUSTER = ['BOM', 'DEL', 'BLR'];

export default function WorldMap() {
  const { width, height, countries, markers, routes, origin, graticule } = worldMap;
  const routeByCode = new Map(routes.map((route) => [route.code, route]));
  const london = routeByCode.get('LHR');
  const singapore = routeByCode.get('SIN');
  const mumbai = routeByCode.get('BOM');

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.pulseDot} aria-hidden="true"></span>
        <span>Colombo, Sri Lanka — shipping to 220+ countries via DHL Medical Express</span>
      </div>

      <MapHover className={styles.canvas}>
        <svg
          className={styles.svg}
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-labelledby="world-map-title world-map-desc"
        >
          <title id="world-map-title">DHL Express WMX rate zones from Colombo</title>
          <desc id="world-map-desc">
            World map shading the 96 rate-card countries from Zone 1 (closest) to Zone 9 (most distant), with arcs
            from Colombo to the five direct SriLankan Airlines departures and to example DHL Medical Express
            destinations. Every country and zone is also listed in the country coverage table below.
          </desc>

          <g transform={`scale(${1 / GEOMETRY_SCALE})`}>
            <path className={styles.graticule} d={graticule} />
            {countries.map((country) => {
              const isOrigin = country.id === SRI_LANKA_ID;
              return (
                <path
                  key={country.id}
                  d={country.d}
                  className={`${styles.land} ${isOrigin ? styles.originLand : ''}`}
                  style={country.zone ? { fill: `var(--zone-${country.zone})` } : undefined}
                  data-title={isOrigin ? 'Origin' : country.zone ? `Zone ${country.zone}` : 'Zone on request'}
                  data-sub={isOrigin ? 'Sri Lanka — Colombo (CMB)' : country.name}
                />
              );
            })}
          </g>

          <g>
            {markers.map((marker) => (
              <circle
                key={marker.code}
                className={styles.marker}
                cx={marker.x}
                cy={marker.y}
                r="3.2"
                style={{ fill: `var(--zone-${marker.zone})` }}
                data-title={`Zone ${marker.zone}`}
                data-sub={marker.name}
              />
            ))}
          </g>

          <g>
            {routes.map((route, index) => (
              <g
                key={route.code}
                className={route.kind === 'scheduled' ? styles.scheduled : styles.network}
                data-title={route.flight ?? route.name}
                data-sub={
                  route.flight
                    ? `${route.name} · direct SriLankan departure`
                    : 'Example destination via DHL Medical Express'
                }
              >
                <path className={styles.routeLine} d={route.d} />
                <path
                  className={styles.routeComet}
                  d={route.d}
                  pathLength={100}
                  style={{ animationDelay: `${index * 0.6}s` }}
                />
                <circle className={styles.routeEnd} cx={route.x} cy={route.y} r={route.kind === 'scheduled' ? 4.5 : 3.5} />
                {/* Hover target sits on the endpoint only, so arcs never block tooltips for the countries they cross */}
                <circle className={styles.routeHit} cx={route.x} cy={route.y} r="11" />
              </g>
            ))}
          </g>

          <g className={styles.origin} aria-hidden="true">
            <circle className={styles.originPulse} cx={origin.x} cy={origin.y} r="5" />
            <circle className={styles.originCore} cx={origin.x} cy={origin.y} r="5" />
          </g>

          <g className={styles.labels} aria-hidden="true">
            <text x={origin.x + 10} y={origin.y + 16}>CMB</text>
            {london && <text x={london.x + 8} y={london.y - 6}>LHR</text>}
            {singapore && <text x={singapore.x + 8} y={singapore.y + 14}>SIN</text>}
            {mumbai && (
              <text x={mumbai.x - 10} y={mumbai.y + 3} textAnchor="end">
                {INDIA_CLUSTER.join(' · ')}
              </text>
            )}
          </g>
        </svg>
      </MapHover>

      <figcaption className={styles.legend}>
        <div className={styles.legendGroup}>
          <span className={styles.legendLabel}>Rate zone</span>
          <div className={styles.rampWrap}>
            <ol className={styles.ramp}>
              {ZONES.map((zone) => (
                <li key={zone}>
                  <span className={styles.rampSwatch} style={{ background: `var(--zone-${zone})` }} />
                  <span className={styles.rampNumber}>{zone}</span>
                </li>
              ))}
            </ol>
            <div className={styles.rampEnds}>
              <span>Closest</span>
              <span>Most distant</span>
            </div>
          </div>
        </div>

        <ul className={styles.keys}>
          <li>
            <span className={`${styles.key} ${styles.keyScheduled}`} aria-hidden="true" />
            Direct SriLankan departures
          </li>
          <li>
            <span className={`${styles.key} ${styles.keyNetwork}`} aria-hidden="true" />
            Example DHL destinations
          </li>
          <li>
            <span className={`${styles.key} ${styles.keyOrigin}`} aria-hidden="true" />
            Colombo (CMB)
          </li>
          <li>
            <span className={`${styles.key} ${styles.keyLand}`} aria-hidden="true" />
            Zone on request
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}
