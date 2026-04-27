import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { features } from "@/lib/content/features";

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-header bg-surface-muted py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Features"
          title="サービスの特徴"
          lead="外国人材の採用・受け入れをワンストップでサポートする3つの強み。"
        />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map(({ number, icon: Icon, title, description }) => (
            <li key={number} className="list-none">
              <Card className="h-full p-7 md:p-8 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="text-5xl md:text-6xl font-bold text-brand-500/15 leading-none"
                  >
                    {number}
                  </span>
                  <span className="inline-flex items-center justify-center size-12 rounded-full bg-brand-500 text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-xl md:text-[1.375rem] font-bold leading-[1.45]">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-[1.8]">
                  {description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
