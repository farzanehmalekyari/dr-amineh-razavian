import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Home">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M10 8c4-4 10-4 12 0s0 8-2 10-6 4-8 8c-2-4-6-6-8-8s-2-6 0-8 4-4 6-2z" strokeLinejoin="round" />
          <circle cx="12.5" cy="13.5" r="0.9" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-base sm:text-lg tracking-wide text-foreground">Dr. Zahra Salehi</span>
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Aesthetic · Dubai</span>
      </span>
    </Link>
  );
}
