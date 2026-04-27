import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}のプライバシーポリシー（個人情報の取り扱いについて）です。`,
};

export default function PrivacyPage() {
  return (
    <main className="bg-background py-16 md:py-24">
      <article className="container mx-auto max-w-3xl px-5 md:px-8 prose-base">
        <p className="text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:text-brand-500 underline">
            ← トップへ戻る
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">プライバシーポリシー</h1>
        <p className="text-sm text-muted-foreground mb-8">
          {siteConfig.name}（以下、当組合）は、お客様の個人情報を尊重し、適切に取り扱うために本プライバシーポリシーを定めます。
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">1. 個人情報の取得</h2>
            <p className="text-sm text-muted-foreground leading-[1.85]">
              当組合は、お問い合わせフォーム等を通じて、お客様より個人情報をご提供いただく場合があります。取得する情報は、必要最小限の範囲に限定します。
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">2. 利用目的</h2>
            <p className="text-sm text-muted-foreground leading-[1.85]">
              取得した個人情報は、お問い合わせへの対応、サービスのご案内、契約手続きの遂行、及び法令に基づく業務遂行のためにのみ利用します。
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">3. 第三者提供</h2>
            <p className="text-sm text-muted-foreground leading-[1.85]">
              法令に基づく場合を除き、ご本人の同意なく第三者へ個人情報を提供することはありません。
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">4. お問い合わせ窓口</h2>
            <p className="text-sm text-muted-foreground leading-[1.85]">
              個人情報の開示・訂正・削除等のご請求は、下記窓口までご連絡ください。
              <br />
              {siteConfig.name}　TEL: {siteConfig.contact.tel}　Email: {siteConfig.contact.email}
            </p>
          </div>
        </section>

        <p className="mt-12 text-xs text-muted-foreground">
          ※ 本ページはモックデータです。実運用前に法務確認のうえ差し替えてください。
        </p>
      </article>
    </main>
  );
}
