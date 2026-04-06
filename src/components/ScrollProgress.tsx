import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import Lenis from 'lenis';

interface ScrollProgressProps {
  lenis: Lenis | null;
}

export default function ScrollProgress({ lenis }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!lenis) return;

    const onScroll = (e: { scroll: number; limit: number }) => {
      setProgress(e.limit > 0 ? e.scroll / e.limit : 0);
    };

    lenis.on('scroll', onScroll);
    return () => {
      lenis.off('scroll', onScroll);
    };
  }, [lenis]);

  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      id="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}
