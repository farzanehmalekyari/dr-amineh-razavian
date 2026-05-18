import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as = "h2",
}: Props) {
  const H = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <H className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-balance">
        {title}
      </H>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
