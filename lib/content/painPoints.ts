import {
  AlertCircle,
  Clock,
  FileWarning,
  HelpCircle,
  TrendingDown,
  Users,
} from "lucide-react";
import type { PainPoint } from "@/lib/types";

export const painPoints: PainPoint[] = [
  { id: "shortage", icon: Users, text: "人手不足で採用が追いつかない" },
  { id: "process", icon: FileWarning, text: "外国人雇用の手続きが複雑でわからない" },
  { id: "retention", icon: TrendingDown, text: "採用してもすぐに辞めてしまう" },
  { id: "visa", icon: AlertCircle, text: "在留資格・ビザの管理が不安" },
  { id: "language", icon: HelpCircle, text: "日本語が通じるか心配" },
  { id: "support", icon: Clock, text: "受け入れ後のサポートまで手が回らない" },
];
