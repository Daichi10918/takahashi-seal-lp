import { FileCheck2, HeartHandshake, UserCheck } from "lucide-react";
import type { Feature } from "@/lib/types";

export const features: Feature[] = [
  {
    number: "01",
    icon: UserCheck,
    title: "厳選された外国人材のご紹介",
    description:
      "技能実習・特定技能・留学生アルバイトなど、貴社のニーズに合った人材を厳選してご紹介します。事前面談・スキルチェック済みで安心です。",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "在留資格・受け入れ手続きを一括代行",
    description:
      "在留資格の申請から受け入れ準備まで、煩雑な手続きを当組合が一括して代行。担当者様の負担を最小限に抑えます。",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "入国後の生活・日本語・定着サポート",
    description:
      "住居の手配、日本語教育、定期面談など、入国後の生活全般をサポート。長く活躍できる環境づくりをお手伝いします。",
  },
];
