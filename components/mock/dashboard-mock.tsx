"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { RefreshCw } from "lucide-react"
import { AppWindow, CountUp, GoogleDot, Kpi, MetaDot, useLoopInView } from "./shared"

// Sample data: 14 days of Google and Meta spend (₹ thousands) and leads.
const DAYS = [
  [32, 14, 210], [36, 12, 230], [30, 16, 205], [41, 15, 260], [38, 18, 255], [44, 17, 290], [40, 20, 284],
  [47, 19, 320], [43, 22, 310], [50, 21, 345], [46, 24, 336], [53, 23, 372], [49, 26, 361], [56, 25, 398],
]
const MAX = 85
const FUNNEL = [
  { label: "Leads", value: 4120, w: 100 },
  { label: "Qualified", value: 1830, w: 62 },
  { label: "Application", value: 960, w: 41 },
  { label: "Approved", value: 412, w: 24 },
  { label: "Won", value: 188, w: 14 },
]

export function DashboardMock({ compact }: { compact?: boolean }) {
  const { ref, active } = useLoopInView<HTMLDivElement>()
  const [syncedAgo, setSyncedAgo] = useState(2)
  // A gentle "live" tick: the sync label counts up and resets, like the real app every 15 minutes.
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => setSyncedAgo((s) => (s >= 14 ? 0 : s + 1)), 1600)
    return () => clearInterval(t)
  }, [active])

  const points = DAYS.map((d, i) => `${(i / (DAYS.length - 1)) * 100},${100 - (d[2] / 420) * 100}`).join(" ")

  return (
    <div ref={ref}>
      <AppWindow title="app.adsassist.in / dashboard">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold">Dashboard</p>
            <p className="text-[11px] text-ink-muted">Google Ads + Meta · Last 14 days</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2 py-1 text-[11px] text-ink-muted">
            <RefreshCw className={active ? "size-3 animate-spin [animation-duration:3s]" : "size-3"} aria-hidden />
            {syncedAgo === 0 ? "Synced just now" : `Synced ${syncedAgo} min ago`}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Kpi label="Spend" delta="▲ 12.4%" good={false}>
            <CountUp to={924310} prefix="₹" />
          </Kpi>
          <Kpi label="Leads" delta="▲ 18.2%">
            <CountUp to={4120} />
          </Kpi>
          <Kpi label="Cost per lead" delta="▼ 4.9%">
            <CountUp to={224} prefix="₹" />
          </Kpi>
          <Kpi label="ROAS" delta="▲ 0.6x">
            <CountUp to={4.8} decimals={1} suffix="x" />
          </Kpi>
        </div>

        <div className={compact ? "mt-4" : "mt-4 grid gap-3 sm:grid-cols-[1.6fr_1fr]"}>
          <div className="rounded-xl border border-line p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Spend and leads</p>
              <div className="flex items-center gap-3 text-[10px] text-ink-muted">
                <span className="flex items-center gap-1"><GoogleDot /> Google</span>
                <span className="flex items-center gap-1"><MetaDot /> Meta</span>
                <span className="flex items-center gap-1"><span className="h-0.5 w-3 rounded bg-good" /> Leads</span>
              </div>
            </div>
            <div className="relative mt-3 h-32">
              <div className="absolute inset-0 flex items-end gap-[3px]">
                {DAYS.map(([g, m], i) => (
                  <div key={i} className="flex h-full flex-1 flex-col justify-end">
                    <motion.div
                      className="rounded-t-[3px] bg-meta/80"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(m / MAX) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.25 + i * 0.04, ease: "easeOut" }}
                    />
                    <motion.div
                      className="bg-blue"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(g / MAX) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                <motion.polyline
                  points={points}
                  fill="none"
                  stroke="var(--color-good)"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>

          {compact ? null : (
            <div className="rounded-xl border border-line p-3">
              <p className="text-xs font-semibold">Lead funnel</p>
              <div className="mt-3 space-y-2">
                {FUNNEL.map((f, i) => (
                  <div key={f.label}>
                    <div className="flex justify-between text-[10px] text-ink-muted">
                      <span>{f.label}</span>
                      <span className="tabular font-semibold text-ink">{f.value.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-mist">
                      <motion.div
                        className="bg-brand h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${f.w}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </AppWindow>
    </div>
  )
}
