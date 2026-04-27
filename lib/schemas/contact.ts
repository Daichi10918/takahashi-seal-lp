import { z } from "zod";
import { INDUSTRY_LABELS } from "@/lib/content/industries";

export const EMPLOYEE_COUNT_OPTIONS = [
  { value: "1-5", label: "1〜5名" },
  { value: "6-10", label: "6〜10名" },
  { value: "11-20", label: "11〜20名" },
  { value: "21+", label: "21名以上" },
] as const;

const employeeCountValues = EMPLOYEE_COUNT_OPTIONS.map((o) => o.value) as [
  string,
  ...string[],
];

const industryValues = INDUSTRY_LABELS as [string, ...string[]];

const phoneRegex = /^0\d{1,4}-?\d{1,4}-?\d{3,4}$/;

export const contactSchema = z.object({
  companyName: z
    .string()
    .min(1, { message: "会社名を入力してください" })
    .max(100, { message: "100文字以内で入力してください" }),
  contactName: z
    .string()
    .min(1, { message: "ご担当者様名を入力してください" })
    .max(50, { message: "50文字以内で入力してください" }),
  phone: z
    .string()
    .min(1, { message: "電話番号を入力してください" })
    .regex(phoneRegex, {
      message: "有効な電話番号を入力してください（例: 03-1234-5678）",
    }),
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .email({ message: "有効なメールアドレスを入力してください" }),
  industry: z.enum(industryValues, {
    message: "業種を選択してください",
  }),
  employeeCount: z.enum(employeeCountValues, {
    message: "採用予定人数を選択してください",
  }),
  message: z
    .string()
    .min(10, { message: "ご相談内容を10文字以上で入力してください" })
    .max(1000, { message: "1000文字以内で入力してください" }),
  consent: z.literal(true, {
    message: "プライバシーポリシーに同意してください",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
