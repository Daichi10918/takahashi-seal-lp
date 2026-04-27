"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/content/nav";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-shadow",
        scrolled
          ? "bg-background/85 backdrop-blur shadow-sm"
          : "bg-background border-b border-transparent",
      )}
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-base md:text-lg font-bold text-brand-500 leading-tight whitespace-nowrap"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="メインナビゲーション"
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className={cn(
              buttonVariants(),
              "hidden sm:inline-flex bg-cta-500 hover:bg-cta-600 text-ink font-bold",
            )}
          >
            無料相談はこちら
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="メニューを開く"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "md:hidden",
              )}
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <SheetHeader>
                <SheetTitle className="text-brand-500">{siteConfig.shortName}</SheetTitle>
                <SheetDescription className="sr-only">
                  ナビゲーションメニュー
                </SheetDescription>
              </SheetHeader>
              <nav
                className="px-4 pb-4 flex flex-col gap-1"
                aria-label="モバイルナビゲーション"
              >
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-2 text-base font-medium text-foreground hover:bg-surface-muted rounded-md"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "mt-4 bg-cta-500 hover:bg-cta-600 text-ink font-bold",
                  )}
                >
                  無料相談はこちら
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
