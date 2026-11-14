"use client"

import { motion, useReducedMotion } from "motion/react"
import { Check, FileSpreadsheet, X } from "lucide-react"
import { ScrollWords } from "@/components/scroll-motion"

const BEFORE = ["An Excel sheet, updated by hand once a day", "Compared with old data once a month", "You take the agency's word for it"]
const AFTER = ["Numbers that update on their own every 15 minutes", "Compare any two periods, any time you want", "You see the same numbers your agency sees"]

const ease = [0.16, 1, 0.3, 1] as const

/**
 * Before / With AdsAssist as two tiles. Both tiles share rows (subgrid),
 * so each pair lines up even when one side wraps to more lines.
 */
export function ExcelCompare() {
  const reduce = useReducedMotion()
  const fade = (delay: number, y = 10) => ({
    variants: { hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : y }, shown: { opacity: 1, y: 0 } },
    transition: reduce ? { duration: 0 } : { duration: 0.7, delay, ease },
  })

  return (
    <motion.div
      className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 sm:grid-rows-[auto_auto_auto_auto] sm:gap-x-5 sm:gap-y-0"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Before */}
      <div className="grid gap-y-5 rounded-[28px] bg-mist p-7 sm:row-span-4 sm:grid-rows-subgrid sm:gap-y-6 sm:p-10">
        <p className="flex items-center gap-2 text-[15px] font-semibold text-ink-muted sm:text-[17px]">
          <FileSpreadsheet className="size-5" aria-hidden /> Before
        </p>
        {BEFORE.map((t, i) => (
          <motion.p key={t} className="flex gap-3 text-[17px] leading-snug text-ink-muted sm:text-[19px]" {...fade(0.05 + i * 0.08)}>
            <X className="mt-0.5 size-5 shrink-0 text-bad/80" aria-hidden /> {t}
          </motion.p>
        ))}
      </div>

      {/* With AdsAssist */}
      <div className="grid gap-y-5 rounded-[28px] bg-paper p-7 shadow-float ring-1 ring-line sm:row-span-4 sm:grid-rows-subgrid sm:gap-y-6 sm:p-10">
        <p className="flex items-center gap-2 text-[15px] font-semibold text-blue sm:text-[17px]">
          <span className="bg-brand size-2.5 rounded-full" aria-hidden /> With AdsAssist
        </p>
        {AFTER.map((t, i) => (
          <motion.p key={t} className="flex gap-3 text-[17px] leading-snug font-medium tracking-[-0.01em] sm:text-[19px]" {...fade(0.3 + i * 0.1)}>
            <motion.span
              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-good text-white"
              variants={{ hidden: { scale: reduce ? 1 : 0 }, shown: { scale: 1 } }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 22, delay: 0.4 + i * 0.1 }}
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

/** Closing line: a large statement that lights up word by word as it scrolls past. */
export function ExcelQuote({ children }: { children: string }) {
  return (
    <ScrollWords
      text={children}
      className="mx-auto mt-20 max-w-4xl text-center text-[28px] leading-[1.2] font-semibold tracking-[-0.03em] sm:mt-28 sm:text-[40px] sm:leading-[1.15] lg:text-[48px]"
    />
  )
}
