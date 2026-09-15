'use client';
import { MotionConfig } from 'framer-motion';

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  // Honour the OS "reduce motion" setting for every framer-motion animation on the site.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
