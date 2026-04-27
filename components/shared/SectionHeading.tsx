import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-10 md:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wider text-cta-600 uppercase mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[clamp(1.625rem,3.5vw,2.25rem)] font-bold text-foreground">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base md:text-lg text-muted-foreground">{lead}</p>
      ) : null}
    </div>
  );
}
