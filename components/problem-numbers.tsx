"use client"

import { motion } from "motion/react"
import { CountUp } from "@/components/mock/shared"

const ROWS = [
  { label: "Google Ads says", value: 120, unit: "conversions", color: "bg-blue" },
  { label: "Meta says", value: 85, unit: "conversions", color: "bg-meta" },
  { label: "Your sales team closed", value: 9, unit: "customers", color: "bg-good" },
]

/** The problem in one picture: three numbers that should agree and don't. */
export function ProblemNumbers() {
  return (
    <div className="mt-10 max-w-3xl space-y-4">
      {ROWS.map((r, i) => (
        <div key={r.label} className="grid grid-cols-[9rem_1fr] items-center gap-4 sm:grid-cols-[13rem_1fr]">
          <p className="text-sm text-ink-soft">{r.label}</p>
          <div className="flex items-center gap-3">
            <div className="h-9 flex-1 overflow-hidden rounded-lg bg-paper ring-1 ring-line">
              <motion.div
                className={`h-full rounded-lg ${r.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.max(3, (r.value / 120) * 100)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="w-28 shrink-0 text-right sm:w-36">
              <CountUp to={r.value} className="text-2xl font-semibold" /> <span className="text-xs text-ink-muted">{r.unit}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
