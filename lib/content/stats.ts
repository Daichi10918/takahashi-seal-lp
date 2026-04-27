import type { Stat } from "@/lib/types";

export const stats: Stat[] = [
  { id: "talent", label: "登録人材数", value: 5000, suffix: "名+", format: "comma" },
  { id: "languages", label: "対応言語", value: 10, suffix: "ヶ国語" },
  { id: "companies", label: "紹介実績企業", value: 300, suffix: "社+" },
  { id: "retention", label: "定着率", value: 95, suffix: "%" },
];
