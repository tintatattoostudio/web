'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/sections/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { revealWithBlur, staggerFadeIn, staggerChild } from '@/lib/animations/variants';
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('landing.about');
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <AnimatedSection
      variants={revealWithBlur}
      className="container mx-auto px-4 py-24 md:py-32"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        style={{
          perspective: 1000,
          transformStyle: 'preserve-3d'
        }}
        className="max-w-4xl mx-auto will-change-transform"
      >
        <Card className="glass shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <CardHeader className="pb-6">
            <motion.div initial="hidden" animate="visible" variants={staggerFadeIn}>
              <motion.div variants={staggerChild}>
                <CardTitle className="text-3xl md:text-5xl font-semibold">
                  {t('title')}
                </CardTitle>
              </motion.div>
            </motion.div>
          </CardHeader>
          <CardContent>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerFadeIn}
              transition={{ delay: 0.2 }}
            >
              <motion.p
                variants={staggerChild}
                className="text-lg md:text-xl text-muted-foreground whitespace-pre-line leading-relaxed"
              >
                {t('content')}
              </motion.p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}
