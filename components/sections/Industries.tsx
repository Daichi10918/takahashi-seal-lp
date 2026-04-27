import { SectionHeading } from "@/components/shared/SectionHeading";
import { industries } from "@/lib/content/industries";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="scroll-mt-header bg-background py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="対応業界"
          lead="幅広い業界で外国人材の受け入れをサポートしています。"
        />
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map(({ id, label, icon: Icon }) => (
            <li key={id} className="list-none">
              <div className="group h-full p-6 md:p-7 rounded-lg bg-surface-muted border border-transparent hover:border-brand-200 hover:bg-brand-50 transition-colors text-center">
                <span className="inline-flex items-center justify-center size-12 md:size-14 rounded-full bg-white text-brand-500 mb-3 ring-1 ring-brand-100 group-hover:ring-brand-200 transition">
                  <Icon className="size-6 md:size-7" aria-hidden="true" />
                </span>
                <p className="text-sm md:text-base font-bold text-foreground">
                  {label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
