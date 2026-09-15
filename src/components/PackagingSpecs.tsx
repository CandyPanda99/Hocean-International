'use client';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Info } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './PackagingSpecs.module.css';

type BoxSpec = {
  name: string;
  rows: { label: string; value: string }[];
};

type SpecTier = {
  id: string;
  label: string;
  boxes: BoxSpec[];
  note?: string;
};

const pharmacoolSizes = [
  { name: 'Small', dimensions: '47.5 × 44.0 × 37.0 cm', space: '7 litres', coolant: '6 × 1350g Pharmacool cassettes', chilledHours: 85 },
  { name: 'Medium', dimensions: '56.4 × 51.4 × 43.5 cm', space: '14 litres', coolant: '6 × 2400g Pharmacool cassettes', chilledHours: 108 },
  { name: 'Large', dimensions: '63.2 × 53.2 × 50.5 cm', space: '28 litres', coolant: '2 × 2000g + 4 × 3000g cassettes', chilledHours: 96 },
];

const specTiers: SpecTier[] = [
  {
    id: 'ambient',
    label: 'Ambient',
    boxes: [
      {
        name: 'Non-Insulated',
        rows: [
          { label: 'Dimensions', value: '23.5 × 19.4 × 12.1 cm' },
          { label: 'Product space', value: '6 × 10ml vials' },
          { label: 'Temp range', value: 'Ambient (non-sensitive)' },
          { label: 'Includes', value: '95kPa bag, absorbent sleeve, bubble bag' },
        ],
      },
      {
        name: 'Insulated',
        rows: [
          { label: 'Dimensions', value: '23.5 × 19.4 × 12.1 cm' },
          { label: 'Product space', value: '6 × 10ml vials' },
          { label: 'Temp range', value: 'Ambient (temperature-sensitive)' },
          { label: 'Includes', value: '95kPa bag, coolant wraps, insulated liner' },
        ],
      },
      {
        name: 'Extreme',
        rows: [
          { label: 'Dimensions', value: '28.9 × 24.1 × 17.8 cm' },
          { label: 'Product space', value: '6 × 10ml vials' },
          { label: 'Temp range', value: 'Above 0°C for 48 hours' },
          { label: 'Includes', value: '95kPa bag, coolant wraps, EPS box' },
        ],
      },
    ],
    note: 'All ambient boxes comply with IATA/ICAO regulations for Category B UN3373 biological substances. UN3373 labelling included.',
  },
  {
    id: 'crt',
    label: 'Controlled Room Temp',
    boxes: pharmacoolSizes.map((size) => ({
      name: size.name,
      rows: [
        { label: 'Dimensions', value: size.dimensions },
        { label: 'Product space', value: size.space },
        { label: 'Duration', value: '15°C – 25°C for 72 hours' },
        { label: 'Coolant', value: size.coolant },
      ],
    })),
  },
  {
    id: 'chilled',
    label: 'Chilled',
    boxes: pharmacoolSizes.map((size) => ({
      name: size.name,
      rows: [
        { label: 'Dimensions', value: size.dimensions },
        { label: 'Product space', value: size.space },
        { label: 'Duration', value: `2°C – 8°C for ${size.chilledHours} hours` },
        { label: 'Coolant', value: size.coolant },
      ],
    })),
    note: 'Pharmacool cassette preconditioning instructions for both summer and winter temperature profiles are included with each box.',
  },
  {
    id: 'frozen',
    label: 'Frozen',
    boxes: [
      { name: 'Small', dimensions: '31.0 × 31.0 × 32.0 cm', space: '9.5 × 9.5 × 13.5 cm or 6 × 10ml vials', hours: 124 },
      { name: 'Medium', dimensions: '34.8 × 34.8 × 36.4 cm', space: '12 × 10ml vials', hours: 122 },
      { name: 'Large', dimensions: '39.5 × 39.5 × 44.8 cm', space: '36 × 10ml vials', hours: 129 },
    ].map((size) => ({
      name: size.name,
      rows: [
        { label: 'Dimensions', value: size.dimensions },
        { label: 'Product space', value: size.space },
        { label: 'Duration', value: `< −20°C for ${size.hours} hours` },
        { label: 'Coolant', value: 'Dry ice (pellets / sticks / plates)' },
      ],
    })),
    note: 'Dry ice sublimates and displaces oxygen — boxes are never hermetically sealed. Air pressure venting is built into each frozen solution. Dry ice supply can be arranged separately.',
  },
  {
    id: 'combo',
    label: 'Combo',
    boxes: [
      {
        name: 'Frozen + Ambient Combination',
        rows: [
          { label: 'Dimensions', value: '29.5 × 24.4 × 44.2 cm' },
          { label: 'Product space', value: '6 × 10ml vials ambient + 6 × 10ml vials frozen' },
          { label: 'Duration (frozen)', value: '< −20°C for 72 hours' },
          { label: 'Includes', value: '2 × EPS coolers, 2 × cooler wraps in a single outer carton' },
        ],
      },
    ],
    note: 'A single shipment can carry frozen and ambient samples simultaneously — useful when multiple specimen types need to travel together from the same origin lab.',
  },
];

export default function PackagingSpecs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = specTiers[activeIndex];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keyOffsets: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let next: number | undefined;
    if (event.key in keyOffsets) {
      next = (activeIndex + keyOffsets[event.key] + specTiers.length) % specTiers.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = specTiers.length - 1;
    }
    if (next === undefined) return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="packaging" className="section section-alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Packaging Specifications"
            title="The right box for every temperature and transit time."
            description="Each tier comes in small, medium, and large configurations — all supplied by Hocean as part of the shipment."
          />
        </Reveal>

        <Reveal>
          <div className={styles.tabs} role="tablist" aria-label="Packaging tiers" onKeyDown={handleKeyDown}>
            {specTiers.map((tier, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tier.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={`spec-tab-${tier.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`spec-panel-${tier.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {tier.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              id={`spec-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`spec-tab-${active.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className={`${styles.grid} ${active.boxes.length === 1 ? styles.gridSingle : ''}`}>
                {active.boxes.map((box) => (
                  <article key={box.name} className={`glass-card ${styles.card}`}>
                    <h3 className={styles.cardTitle}>
                      <Box size={18} strokeWidth={1.75} aria-hidden="true" />
                      {box.name}
                    </h3>
                    <dl className={styles.rows}>
                      {box.rows.map((row) => (
                        <div key={row.label} className={styles.row}>
                          <dt>{row.label}</dt>
                          <dd>{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>

              {active.note && (
                <p className={styles.note}>
                  <Info size={18} strokeWidth={1.75} aria-hidden="true" />
                  {active.note}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
