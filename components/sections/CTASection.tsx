import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="scroll-mt-header relative bg-brand-500 text-white"
    >
      <div className="container mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-20 text-center">
        <h2
          id="cta-heading"
          className="text-[clamp(1.625rem,4vw,2.25rem)] font-bold leading-[1.4]"
        >
          まずは無料でご相談ください。
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/85 leading-[1.85]">
          ヒアリング後にお見積もりをご提示します。
          <br className="hidden md:inline" />
          ご相談だけでも歓迎です。お気軽にお問い合わせください。
        </p>
        <div className="mt-8">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-cta-500 hover:bg-cta-600 text-ink font-bold shadow-lg shadow-black/15",
            )}
          >
            無料相談はこちら
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
