"use client"

import { animate, useInView, useMotionValue, useReducedMotion, useTransform, motion } from "motion/react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/cn"

/** Product-screen frame: a window with the app's chrome, used by every mockup. */
export function AppWindow({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-paper shadow-float", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs font-medium text-ink-muted">{title}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 })

/** A number that counts up when it scrolls into view. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.4,
  className,
}: {
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const value = useMotionValue(reduce ? to : 0)
  const text = useTransform(value, (v) => prefix + (decimals ? v.toFixed(decimals) : inr.format(Math.round(v))) + suffix)
  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(value, to, { duration, ease: [0.22, 1, 0.36, 1] })
    return () => c.stop()
  }, [inView, reduce, to, duration, value])
  return (
    <motion.span ref={ref} className={cn("tabular", className)}>
      {text}
    </motion.span>
  )
}

export function Kpi({ label, children, delta, good = true }: { label: string; children: React.ReactNode; delta?: string; good?: boolean }) {
  return (
    <div className="rounded-xl border border-line bg-paper p-3">
      <p className="text-[10px] font-semibold tracking-[0.08em] text-ink-muted uppercase">{label}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">{children}</p>
      {delta ? <p className={cn("mt-0.5 text-[11px] font-semibold tabular", good ? "text-good" : "text-bad")}>{delta}</p> : null}
    </div>
  )
}

export function GoogleDot({ className }: { className?: string }) {
  return <span className={cn("inline-block size-2 rounded-full bg-blue", className)} aria-hidden />
}
export function MetaDot({ className }: { className?: string }) {
  return <span className={cn("inline-block size-2 rounded-full bg-meta", className)} aria-hidden />
}

/** True while the element is on screen; mockups pause their loops off screen. */
export function useLoopInView<T extends Element>() {
  const ref = useRef<T>(null)
  const inView = useInView(ref, { margin: "-60px" })
  const reduce = useReducedMotion()
  return { ref, active: inView && !reduce, reduce: Boolean(reduce) }
}
