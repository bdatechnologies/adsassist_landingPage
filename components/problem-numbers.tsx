"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"
import { CountUp } from "@/components/mock/shared"
import { cn } from "@/lib/cn"

/*
 * The first three sentences of the problem copy, set as three big figures.
 * Each item is exactly one sentence of the copy, split only across lines:
 *   "Google reports 120 conversions."  "Meta reports 85."  "Your sales team closed 9."
 */
const STATS = [
  { lead: "Google reports", value: 120, tail: " conversions.", bar: "bg-blue", num: "text-ink" },
  { lead: "Meta reports", value: 85, tail: ".", bar: "bg-meta", num: "text-ink" },
  { lead: "Your sales team closed", value: 9, tail: ".", bar: "bg-brand", num: "text-brand" },
]

export function ProblemNumbers({ rest }: { rest: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  // Bars grow with the scroll, so the gap between "120" and "9" opens up as you read.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "center 0.55"] })
  const grow = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.5 })

  return (
    <div ref={ref} className="mx-auto mt-14 max-w-5xl sm:mt-20">
      <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.lead}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-center sm:text-left"
          >
            <p>
              <span className="block text-[17px] tracking-[-0.01em] text-ink-soft sm:text-[19px]">{s.lead}</span>{" "}
              <span className="mt-1 block">
                <CountUp
                  to={s.value}
                  className={cn("text-[64px] leading-none font-semibold tracking-[-0.045em] sm:text-[72px] lg:text-[96px]", s.num)}
                />
                <span className={cn("font-semibold tracking-[-0.02em]", s.tail === "." ? "text-[64px] leading-none sm:text-[72px] lg:text-[96px]" : "text-[19px] text-ink-soft sm:text-[21px]", s.tail === "." && s.num)}>
                  {s.tail}
                </span>
              </span>
            </p>
            <div className="mx-auto mt-6 h-1.5 max-w-60 overflow-hidden rounded-full bg-line sm:mx-0 sm:max-w-none" aria-hidden>
              <motion.div
                className={cn("h-full origin-left rounded-full", s.bar)}
                style={{ width: `${Math.max(4, (s.value / 120) * 100).toFixed(2)}%`, scaleX: reduce ? 1 : grow }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-3xl text-center text-[21px] leading-[1.4] font-semibold tracking-[-0.02em] text-balance sm:mt-20 sm:text-[28px] sm:leading-[1.3]">
        {rest}
      </p>
    </div>
  )
}
