import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const startYear = siteConfig.copyrightStartYear;
  const yearLabel = year === startYear ? `${year}` : `${startYear}-${year}`;

  return (
    <footer className="bg-foreground text-white/85" role="contentinfo">
      <div className="container mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <p className="text-lg font-bold text-white">{siteConfig.name}</p>
            <p className="mt-3 text-xs text-white/65">{siteConfig.legal.licenseNumber}</p>
            <p className="mt-1 text-xs text-white/65">{siteConfig.legal.representative}</p>
          </div>

          <div className="text-sm">
            <p className="text-xs font-bold text-white/55 uppercase tracking-wider mb-3">
              所在地・連絡先
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0 text-white/55" aria-hidden="true" />
                <span className="leading-[1.7]">
                  〒{siteConfig.contact.postal}
                  <br />
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-white/55" aria-hidden="true" />
                <a href={siteConfig.contact.telLink} className="hover:text-white">
                  {siteConfig.contact.tel}
                </a>
                <span className="text-xs text-white/55">（{siteConfig.contact.hours}）</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-white/55" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-xs font-bold text-white/55 uppercase tracking-wider mb-3">
              リーガル
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/tokushoho" className="hover:text-white">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/55">
          <p>© {yearLabel} {siteConfig.name}. All rights reserved.</p>
          <p>※ 掲載情報はモックデータです。</p>
        </div>
      </div>
    </footer>
  );
}
