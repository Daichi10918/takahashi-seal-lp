"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqItems } from "@/lib/content/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-header bg-surface-muted py-16 md:py-24"
    >
      <div className="container mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          lead="お問い合わせの前に、よくいただく質問をご確認ください。"
        />
        <Accordion className="bg-background rounded-lg border divide-y">
          {faqItems.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              value={id}
              className="px-5 md:px-6 border-b last:border-b-0"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-bold py-5 hover:no-underline [&>svg]:text-brand-500">
                <span className="flex items-start gap-3">
                  <span className="text-brand-500 font-bold shrink-0">Q.</span>
                  <span>{question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm md:text-base text-muted-foreground leading-[1.85]">
                <span className="flex items-start gap-3">
                  <span className="text-cta-600 font-bold shrink-0">A.</span>
                  <span>{answer}</span>
                </span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
