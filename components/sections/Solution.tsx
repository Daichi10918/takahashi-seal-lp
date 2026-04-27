import { ChevronDown } from "lucide-react";

export function Solution() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-heading"
      className="scroll-mt-header bg-background py-16 md:py-20"
    >
      <div className="container mx-auto max-w-3xl px-5 md:px-8 text-center">
        <p className="text-sm font-medium tracking-wider text-cta-600 uppercase mb-4">
          Our Solution
        </p>
        <h2
          id="solution-heading"
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.3]"
        >
          そのお悩み、
          <br className="md:hidden" />
          <span className="text-brand-500">私たちが解決します。</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-[1.9]">
          人材紹介・在留資格手続き・定着支援まで、ワンストップで一貫サポート。
          採用担当者様の負担を最小限に、確実な受け入れ体制を構築します。
        </p>
        <div className="mt-10 flex justify-center">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center size-14 rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/20"
          >
            <ChevronDown className="size-7" />
          </span>
        </div>
      </div>
    </section>
  );
}
