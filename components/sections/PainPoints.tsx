import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { painPoints } from "@/lib/content/painPoints";

export function PainPoints() {
  return (
    <section
      id="pain-points"
      aria-labelledby="pain-heading"
      className="scroll-mt-header bg-surface-muted py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Pain Points"
          title="こんなお悩みありませんか？"
          lead="外国人雇用にまつわる「困った」を、私たちはこれまで数多く解決してきました。"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {painPoints.map(({ id, icon: Icon, text }) => (
            <li key={id} className="list-none">
              <Card className="h-full p-6 md:p-7 flex items-start gap-4">
                <span className="inline-flex shrink-0 items-center justify-center size-11 rounded-full bg-brand-50 text-brand-500">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-base md:text-[1.0625rem] font-medium leading-[1.7]">
                  {text}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
