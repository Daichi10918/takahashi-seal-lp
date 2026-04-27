import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, MapPin, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const trustBadges = [
  { icon: ShieldCheck, label: "監理団体許可済" },
  { icon: Languages, label: "多言語対応" },
  { icon: MapPin, label: "全国対応" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-background to-background"
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <h1
              id="hero-heading"
              className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-[1.25] text-foreground"
            >
              外国人材の採用を、
              <br />
              もっとシンプルに。
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-[1.9]">
              {siteConfig.name} が、優秀な外国人スタッフの紹介から在留資格手続き、定着支援まで
              <br className="hidden md:inline" />
              ワンストップでサポートします。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-cta-500 hover:bg-cta-600 text-ink font-bold",
                )}
              >
                無料で相談する
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="/dummy.pdf"
                download
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                資料をダウンロード
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <Icon className="size-4 text-brand-500" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[6/5] w-full">
            <Image
              src="/hero.svg"
              alt="日本企業と外国人材をつなぐイメージ"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
