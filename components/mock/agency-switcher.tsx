"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Building2 } from "lucide-react"
import { cn } from "@/lib/cn"
import { AppWindow, useLoopInView } from "./shared"

const CLIENTS = [
  { n: "Sunrise Finance", s: "₹4.2L", l: "1,180 leads", c: "bg-blue" },
  { n: "Brightpath Academy", s: "₹2.7L", l: "2,340 sign-ups", c: "bg-meta" },
  { n: "Skyline Homes", s: "₹6.1L", l: "96 site visits", c: "bg-cyan" },
  { n: "Ledgerly", s: "₹1.9L", l: "212 paying users", c: "bg-good" },
]

/** Agency workspace list; the active client moves on a loop to show one-click switching. */
export function AgencySwitcher() {
  const { ref, active } = useLoopInView<HTMLDivElement>()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!active || paused) return
    const t = setInterval(() => setCurrent((c) => (c + 1) % CLIENTS.length), 2200)
    return () => clearInterval(t)
  }, [active, paused])

  return (
    <div ref={ref} onMouseLeave={() => setPaused(false)}>
      <AppWindow title="app.adsassist.in">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <Building2 className="size-4 text-blue" aria-hidden /> Growthline Agency · 4 clients
        </p>

        <ul className="relative mt-4 overflow-hidden rounded-xl border border-line">
          {CLIENTS.map((c, i) => {
            const on = i === current
            return (
              <li
                key={c.n}
                onMouseEnter={() => {
                  setPaused(true)
                  setCurrent(i)
                }}
                className="relative flex cursor-default items-center gap-3 border-b border-line px-4 py-3 last:border-b-0"
              >
                {on && (
                  <motion.span
                    layoutId="agency-active"
                    className="absolute inset-0 border-l-2 border-blue bg-blue-soft"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    aria-hidden
                  />
                )}
                <span className={cn("relative grid size-8 shrink-0 place-items-center rounded-lg text-xs font-semibold text-white", c.c)}>{c.n[0]}</span>
                <div className="relative min-w-0 flex-1">
                  <p className={cn("truncate text-sm font-semibold transition-colors", on && "text-blue")}>{c.n}</p>
                  <p className="text-xs text-ink-muted">{c.l} this month</p>
                </div>
                <span className="relative tabular text-sm font-semibold">{c.s}</span>
              </li>
            )
          })}
        </ul>

        <p className="mt-4 text-xs text-ink-muted">Sample data. Each client sees only their own workspace.</p>
      </AppWindow>
    </div>
  )
}
