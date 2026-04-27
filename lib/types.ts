import type { LucideIcon } from "lucide-react";

export interface PainPoint {
  id: string;
  icon: LucideIcon;
  text: string;
}

export interface Feature {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  format?: "comma";
}

export interface Industry {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  industry: string;
  companyInitial: string;
  challenge: string;
  result: string;
  comment: string;
  personRole?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
