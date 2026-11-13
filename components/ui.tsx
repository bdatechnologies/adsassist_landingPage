import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/cn"

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-blue uppercase", className)}>
      <span className="bg-brand h-1.5 w-1.5 rounded-full" aria-hidden />
      {children}
    </p>
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
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow className={center ? "justify-center" : undefined}>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl leading-[1.15] font-semibold tracking-tight text-balance sm:text-[40px]">{title}</h2>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft">{lead}</p> : null}
    </div>
  )
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,color] duration-200 active:translate-y-px"
const sizes = { md: "h-11 px-5 text-[15px]", lg: "h-12 px-6 text-base", sm: "h-9 px-4 text-sm" }
const variants = {
  primary: "bg-brand text-white shadow-[0_8px_24px_-8px_rgb(7_92_246/0.6)] hover:shadow-[0_12px_30px_-8px_rgb(116_0_239/0.55)]",
  secondary: "border border-line-strong bg-paper text-ink hover:border-ink-muted",
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
