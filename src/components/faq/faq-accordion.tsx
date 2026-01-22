'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { QA } from '@/lib/api/types';
import { motion } from 'framer-motion';
import { staggerContainer, staggerChild } from '@/lib/animations/variants';

type FAQAccordionProps = {
  items: QA[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <Accordion className="w-full">
        {items.map((item, index) => (
          <motion.div key={index} variants={staggerChild}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
