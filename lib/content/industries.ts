import {
  BedDouble,
  Factory,
  HardHat,
  HeartHandshake,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";
import type { Industry } from "@/lib/types";

export const industries: Industry[] = [
  { id: "food", label: "飲食", icon: UtensilsCrossed },
  { id: "hotel", label: "ホテル・宿泊", icon: BedDouble },
  { id: "care", label: "介護", icon: HeartHandshake },
  { id: "logistics", label: "物流・運送", icon: Truck },
  { id: "manufacturing", label: "製造", icon: Factory },
  { id: "construction", label: "建設", icon: HardHat },
  { id: "retail", label: "小売", icon: ShoppingBag },
  { id: "agriculture", label: "農業", icon: Wheat },
];

export const INDUSTRY_LABELS = industries.map((i) => i.label);
