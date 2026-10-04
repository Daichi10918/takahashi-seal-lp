export const siteConfig = {
  name: "協同組合グローバルワークス",
  shortName: "グローバルワークス",
  url: "https://rapole.or.jp",
  metaTitle:
    "外国人材の採用なら協同組合グローバルワークス｜紹介・在留資格・定着支援をワンストップ",
  metaDescription:
    "技能実習・特定技能・留学生アルバイトの紹介から在留資格手続き、入国後の定着支援までワンストップ。飲食・宿泊・介護・物流など幅広い業界に対応。",
  contact: {
    postal: "100-0001",
    address: "東京都千代田区千代田1-1-1 グローバルビル5F",
    tel: "03-0000-0000",
    telLink: "tel:0300000000",
    email: "info@globalworks.example.co.jp",
    hours: "平日 9:00 〜 18:00",
  },
  legal: {
    licenseNumber: "監理団体許可番号: 許1234567890",
    representative: "代表理事 山田 太郎",
  },
  copyrightStartYear: 2024,
} as const;

export type SiteConfig = typeof siteConfig;
