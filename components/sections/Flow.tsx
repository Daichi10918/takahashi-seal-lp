import { SectionHeading } from "@/components/shared/SectionHeading";
import { flowSteps } from "@/lib/content/flowSteps";

export function Flow() {
  return (
    <section
      id="flow"
      aria-labelledby="flow-heading"
      className="scroll-mt-header bg-surface-muted py-16 md:py-24"
    >
      <div className="container mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Flow"
          title="ご利用の流れ"
          lead="お問い合わせから定着支援まで、5つのステップでご案内します。"
        />
        <ol className="relative space-y-6 md:space-y-8">
          {flowSteps.map(({ step, title, description }, idx) => (
            <li
              key={step}
              className="relative flex gap-5 md:gap-7"
            >
              <div className="flex flex-col items-center shrink-0">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center size-12 md:size-14 rounded-full bg-brand-500 text-white font-bold text-lg md:text-xl shadow-md shadow-brand-500/20"
                >
                  {String(step).padStart(2, "0")}
                </span>
                {idx < flowSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 bg-brand-200"
                  />
                ) : null}
              </div>
              <div className="flex-1 pb-2 md:pb-4">
                <h3 className="text-lg md:text-xl font-bold leading-[1.5]">
                  {title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-[1.85]">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
