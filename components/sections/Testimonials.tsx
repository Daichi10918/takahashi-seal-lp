import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-header bg-background py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="導入事例・お客様の声"
          lead="様々な業界の企業様から、お喜びの声をいただいています。"
        />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ id, industry, companyInitial, challenge, result, comment, personRole }) => (
            <li key={id} className="list-none">
              <Card className="h-full p-6 md:p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <span className="inline-flex items-center justify-center text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-600">
                    {industry}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {companyInitial}
                  </span>
                </div>

                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-cta-600 mb-1">課題</dt>
                    <dd className="text-foreground/90 leading-[1.75]">{challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-cta-600 mb-1">導入後の効果</dt>
                    <dd className="text-foreground/90 leading-[1.75]">{result}</dd>
                  </div>
                </dl>

                <blockquote className="mt-auto pt-4 border-t">
                  <Quote className="size-5 text-brand-200 mb-2" aria-hidden="true" />
                  <p className="text-sm text-foreground leading-[1.8]">{comment}</p>
                  {personRole ? (
                    <footer className="mt-3 text-xs text-muted-foreground">
                      ― <cite className="not-italic">{personRole}</cite>
                    </footer>
                  ) : null}
                </blockquote>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          ※ 掲載許諾済み・一部脚色を加えて掲載しています。
        </p>
      </div>
    </section>
  );
}
