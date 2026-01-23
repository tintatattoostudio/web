'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { staggerContainer, staggerChild } from '@/lib/animations/variants';
import { FAQSectionQA } from '@/lib/types';

export function FAQAccordion({ items }: { items: FAQSectionQA[] }) {
  const getContent = (item: FAQSectionQA) => {
    if (item.type === "list") {
      return (
        <ul className="list-disc pl-5 space-y-2">
          {item.answer.split(',').map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      );
    }

    if (item.type === "html") {
      return <div dangerouslySetInnerHTML={{ __html: item.answer }} />;
    }

    return <p>{item.answer}</p>;
  };

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <Accordion className="w-full">
        {items.map((item, index) => (
          <motion.div key={index} variants={staggerChild}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line text-base">
                {getContent(item)}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
