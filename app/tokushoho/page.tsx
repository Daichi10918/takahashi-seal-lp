import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "特定商取引法に基づく表記（モックデータ）。",
};

const rows: { label: string; value: string }[] = [
  { label: "事業者名", value: siteConfig.name },
  { label: "代表者", value: siteConfig.legal.representative },
  {
    label: "所在地",
    value: `〒${siteConfig.contact.postal} ${siteConfig.contact.address}`,
  },
  { label: "電話番号", value: `${siteConfig.contact.tel}（${siteConfig.contact.hours}）` },
  { label: "メールアドレス", value: siteConfig.contact.email },
  { label: "許認可", value: siteConfig.legal.licenseNumber },
  { label: "提供サービス", value: "外国人材の紹介・在留資格手続き代行・定着支援" },
];

export default function TokushohoPage() {
  return (
    <main className="bg-background py-16 md:py-24">
      <article className="container mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:text-brand-500 underline">
            ← トップへ戻る
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">特定商取引法に基づく表記</h1>

        <dl className="rounded-lg border divide-y bg-surface-muted">
          {rows.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3 px-5 py-4">
              <dt className="text-sm font-bold text-foreground">{label}</dt>
              <dd className="sm:col-span-2 text-sm text-muted-foreground leading-[1.7]">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-xs text-muted-foreground">
          ※ 本ページはモックデータです。実運用前に法務確認のうえ差し替えてください。
        </p>
      </article>
    </main>
  );
}
