import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/cn"

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center text-[15px] font-semibold tracking-[-0.01em] text-blue sm:text-[17px]", className)}>{children}</p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  lead?: React.ReactNode
  center?: boolean
  className?: string
}) {
  return (
    // A max-w-* in className replaces the default width (cn does not merge classes).
    <div className={cn(!className?.includes("max-w-") && "max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow className={center ? "justify-center" : undefined}>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance sm:text-[44px] sm:leading-[1.08] lg:text-[48px]">{title}</h2>
      {lead ? <p className="mt-5 text-[17px] leading-[1.5] tracking-[-0.01em] text-pretty text-ink-soft sm:text-[19px]">{lead}</p> : null}
    </div>
  )
}

// Pill buttons: flat, no glow, and a quick press-down on :active.
const base =
  "inline-flex items-center justify-center gap-1.5 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-[transform,background-color,color,border-color,filter] duration-200 ease-[var(--ease-soft)] active:scale-[0.97] active:duration-100"
const sizes = { sm: "h-10 px-4 text-sm", md: "h-11 px-[22px] text-[15px]", lg: "h-12 px-7 text-[17px]", xl: "h-14 px-9 text-[17px]" }
const variants = {
  primary: "bg-brand text-white hover:brightness-110",
  secondary: "border border-blue bg-paper text-blue hover:bg-blue hover:text-white",
  ghost: "text-ink-soft hover:text-ink",
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow,
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  arrow?: boolean
  className?: string
}) {
  const cls = cn(base, sizes[size], variants[variant], className)
  const inner = (
    <>
      {children}
      {arrow ? <ArrowRight className="size-4" aria-hidden /> : null}
    </>
  )
  return href.startsWith("http") || href.startsWith("mailto:") ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

export function Badge({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "soon" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
        tone === "blue" ? "bg-blue-soft text-blue" : "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
      )}
    >
      {children}
    </span>
  )
}
