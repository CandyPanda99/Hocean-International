'use client';
import { useRef, useState } from 'react';
import styles from './WorldMap.module.css';

type Tip = { title: string; sub: string; x: number; y: number; flip: boolean };

/** Reads `data-title` / `data-sub` off the hovered map element and shows a tooltip beside the pointer. */
export default function MapHover({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<Tip | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    const target = (event.target as Element).closest<SVGElement>('[data-title]');
    if (!frame || !target) {
      setTip(null);
      return;
    }
    const rect = frame.getBoundingClientRect();
    const x = event.clientX - rect.left;
    setTip({
      title: target.dataset.title ?? '',
      sub: target.dataset.sub ?? '',
      x,
      y: event.clientY - rect.top,
      flip: x > rect.width * 0.6,
    });
  };

  return (
    <div
      ref={frameRef}
      className={`${styles.hoverFrame} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTip(null)}
    >
      {children}
      {tip && (
        <div
          className={`${styles.tooltip} ${tip.flip ? styles.tooltipFlip : ''}`}
          style={{ left: tip.x, top: tip.y }}
          aria-hidden="true"
        >
          <strong>{tip.title}</strong>
          <span>{tip.sub}</span>
        </div>
      )}
    </div>
  );
}
