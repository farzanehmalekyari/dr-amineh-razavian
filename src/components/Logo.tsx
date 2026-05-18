import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Home">
      <span className="flex h-14 w-14 items-center justify-center rounded-full text-primary">
        <img src={logo} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-base sm:text-lg tracking-wide text-foreground">Dr. Zahra Salehi</span>
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Dermatologist · Dubai</span>
      </span>
    </Link>
  );
}
