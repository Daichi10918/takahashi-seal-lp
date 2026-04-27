"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";
import { stats } from "@/lib/content/stats";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="scroll-mt-header bg-brand-500 text-white py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-sm font-medium tracking-wider text-cta-400 uppercase mb-3">
            Why Us
          </p>
          <h2
            id="why-heading"
            className="text-[clamp(1.625rem,3.5vw,2.25rem)] font-bold leading-[1.3]"
          >
            数字でわかる、選ばれる理由
          </h2>
          <p className="mt-4 text-base text-white/80 leading-[1.85]">
            これまでの実績が、私たちのサービスの信頼性を物語っています。
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ id, label, value, suffix, format }, idx) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="list-none text-center"
              aria-label={`${label} ${value}${suffix}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-cta-400 leading-none">
                <CountUp to={value} suffix={suffix} format={format} />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium text-white/85">
                {label}
              </p>
            </motion.li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-white/55 text-center">
          ※ 当組合参考値（モックデータ）
        </p>
      </div>
    </section>
  );
}
