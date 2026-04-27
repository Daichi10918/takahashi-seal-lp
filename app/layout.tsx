import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.metaTitle}`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  keywords: [
    "外国人材",
    "外国人雇用",
    "技能実習",
    "特定技能",
    "在留資格",
    "人材紹介",
    "協同組合",
  ],
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
