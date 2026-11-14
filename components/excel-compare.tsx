"use client"

import { motion, useReducedMotion } from "motion/react"
import { Check, FileSpreadsheet, X } from "lucide-react"

const BEFORE = ["An Excel sheet, updated by hand once a day", "Compared with old data once a month", "You take the agency's word for it"]
const AFTER = ["Numbers that update on their own every 15 minutes", "Compare any two periods, any time you want", "You see the same numbers your agency sees"]

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Before / With AdsAssist side by side. Both columns share rows (subgrid),
 * so each pair lines up even when one side wraps to more lines.
 */
export function ExcelCompare() {
  const reduce = useReducedMotion()
  const fade = (delay: number, x = 0) => ({
    variants: { hidden: { opacity: reduce ? 1 : 0, x: reduce ? 0 : x }, shown: { opacity: 1, x: 0 } },
    transition: reduce ? { duration: 0 } : { duration: 0.35, delay, ease },
  })

  return (
    <motion.div
      className="grid overflow-hidden rounded-2xl border border-line shadow-card sm:grid-cols-2 sm:grid-rows-[auto_auto_auto_auto]"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Before */}
      <div className="grid gap-y-4 bg-mist p-6 sm:row-span-4 sm:grid-rows-subgrid sm:gap-y-5">
        <p className="flex items-center gap-2 pb-1 text-sm font-semibold text-ink-muted">
          <FileSpreadsheet className="size-4" aria-hidden /> Before
        </p>
        {BEFORE.map((t, i) => (
          <motion.p key={t} className="flex gap-3 text-ink-soft" {...fade(0.05 + i * 0.06)}>
            <X className="mt-1 size-4 shrink-0 text-bad" aria-hidden /> {t}
          </motion.p>
        ))}
      </div>

      {/* With AdsAssist */}
      <div className="grid gap-y-4 bg-paper p-6 sm:row-span-4 sm:grid-rows-subgrid sm:gap-y-5">
        <p className="flex items-center gap-2 pb-1 text-sm font-semibold text-blue">
          <span className="bg-brand size-2 rounded-full" aria-hidden /> With AdsAssist
        </p>
        {AFTER.map((t, i) => (
          <motion.p key={t} className="flex gap-3 font-medium" {...fade(0.3 + i * 0.1, -8)}>
            <motion.span
              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-good-soft text-good"
              variants={{ hidden: { scale: reduce ? 1 : 0 }, shown: { scale: 1 } }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 20, delay: 0.38 + i * 0.1 }}
              aria-hidden
            >
              <Check className="size-3" strokeWidth={3} />
            </motion.span>
            {t}
          </motion.p>
        ))}
      </div>
    </motion.div>
  )
}

/** Closing line with a left bar that draws down. */
export function ExcelQuote({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  return (
    <motion.p className="relative mt-6 pl-4 text-lg font-medium" initial="hidden" whileInView="shown" viewport={{ once: true, margin: "-60px" }}>
      <motion.span
        className="absolute top-0 left-0 h-full w-0.5 origin-top rounded-full bg-blue"
        variants={{ hidden: { scaleY: reduce ? 1 : 0 }, shown: { scaleY: 1 } }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 0.15, ease }}
        aria-hidden
      />
      {children}
    </motion.p>
  )
}
