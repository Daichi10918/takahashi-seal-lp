"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";
import {
  contactSchema,
  EMPLOYEE_COUNT_OPTIONS,
  type ContactFormValues,
} from "@/lib/schemas/contact";
import { industries } from "@/lib/content/industries";

type FormState = ContactFormValues & {
  industry: string;
  employeeCount: string;
};

const RequiredMark = () => (
  <span className="ml-1 text-xs font-bold text-destructive" aria-hidden="true">
    *
  </span>
);

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormState>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      companyName: "",
      contactName: "",
      phone: "",
      email: "",
      industry: "",
      employeeCount: "",
      message: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (values: FormState) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast.success(
        "お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。",
      );
      reset();
    } catch {
      toast.error("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-header bg-background py-16 md:py-24"
    >
      <div className="container mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="お問い合わせ"
          lead="ご相談・お見積もりは無料です。お気軽にお問い合わせください。"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-surface-muted rounded-xl border p-6 md:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="companyName">
                会社名<RequiredMark />
              </Label>
              <Input
                id="companyName"
                autoComplete="organization"
                aria-invalid={!!errors.companyName}
                {...register("companyName")}
              />
              {errors.companyName ? (
                <p className="text-xs text-destructive">{errors.companyName.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactName">
                ご担当者様名<RequiredMark />
              </Label>
              <Input
                id="contactName"
                autoComplete="name"
                aria-invalid={!!errors.contactName}
                {...register("contactName")}
              />
              {errors.contactName ? (
                <p className="text-xs text-destructive">{errors.contactName.message}</p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone">
                電話番号<RequiredMark />
              </Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="03-1234-5678"
                aria-invalid={!!errors.phone}
                {...register("phone")}
              />
              {errors.phone ? (
                <p className="text-xs text-destructive">{errors.phone.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                メールアドレス<RequiredMark />
              </Label>
              <Input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="industry">
                業種<RequiredMark />
              </Label>
              <Controller
                control={control}
                name="industry"
                render={({ field }) => (
                  <Select
                    value={field.value || undefined}
                    onValueChange={(v) => field.onChange(v)}
                  >
                    <SelectTrigger
                      id="industry"
                      className="w-full h-10"
                      aria-invalid={!!errors.industry}
                    >
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((i) => (
                        <SelectItem key={i.id} value={i.label}>
                          {i.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.industry ? (
                <p className="text-xs text-destructive">{errors.industry.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="employeeCount">
                採用予定人数<RequiredMark />
              </Label>
              <Controller
                control={control}
                name="employeeCount"
                render={({ field }) => (
                  <Select
                    value={field.value || undefined}
                    onValueChange={(v) => field.onChange(v)}
                  >
                    <SelectTrigger
                      id="employeeCount"
                      className="w-full h-10"
                      aria-invalid={!!errors.employeeCount}
                    >
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {EMPLOYEE_COUNT_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.employeeCount ? (
                <p className="text-xs text-destructive">{errors.employeeCount.message}</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              ご相談内容<RequiredMark />
            </Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="採用したい業種・職種、人数、希望時期などをご記入ください。"
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            {errors.message ? (
              <p className="text-xs text-destructive">{errors.message.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Controller
              control={control}
              name="consent"
              render={({ field }) => (
                <label
                  htmlFor="consent"
                  className={cn(
                    "flex items-start gap-3 text-sm cursor-pointer select-none",
                    errors.consent ? "text-destructive" : "text-foreground",
                  )}
                >
                  <Checkbox
                    id="consent"
                    checked={!!field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    className="mt-0.5"
                  />
                  <span className="leading-[1.65]">
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-brand-500"
                    >
                      プライバシーポリシー
                    </a>
                    に同意します
                    <RequiredMark />
                  </span>
                </label>
              )}
            />
            {errors.consent ? (
              <p className="text-xs text-destructive">{errors.consent.message}</p>
            ) : null}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-cta-500 hover:bg-cta-600 text-ink font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  送信中...
                </>
              ) : (
                "送信する"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
