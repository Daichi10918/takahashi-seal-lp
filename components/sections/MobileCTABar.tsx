"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function MobileCTABar() {
  return (
    <div
      role="region"
      aria-label="モバイル用クイックアクション"
      className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-background/95 backdrop-blur border-t shadow-[0_-4px_12px_rgba(0,0,0,0.04)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2 p-3">
        <a
          href={siteConfig.contact.telLink}
          aria-label={`電話で問い合わせる ${siteConfig.contact.tel}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "flex-1 border-brand-500 text-brand-500 hover:bg-brand-50 font-bold",
          )}
        >
          <Phone className="size-4" aria-hidden="true" />
          電話
        </a>
        <Link
          href="#contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "flex-[2] bg-cta-500 hover:bg-cta-600 text-ink font-bold",
          )}
        >
          無料相談
        </Link>
      </div>
    </div>
  );
}
