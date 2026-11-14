"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { Code2, Plug, Route } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui"

const STEPS = [
  {
    icon: Plug,
    t: "Connect Google Ads and Meta.",
    d: "Sign in with Google and Meta and pick your ad accounts. Your last 30 days load right away.",
  },
  {
    icon: Code2,
    t: "Add one line of code to your site.",
    d: "The AdsAssist pixel records visits and form fills and links each one to the ad that brought it. Prefer your CRM? Send leads through our API.",
  },
  {
    icon: Route,
    t: "Follow every lead to the sale.",
    d: "Move leads through your own pipeline stages, or let your CRM update them. AdsAssist shows what each stage cost you, campaign by campaign.",
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export function HowItWorks() {
  const reduce = useReducedMotion()
  const list = useRef<HTMLOListElement>(null)
  // One progress value for the whole list; each step's line fills during its third of it.
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 0.8", "end 0.55"] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.5 })

  return (
    <section id="how-it-works" className="scroll-mt-14 bg-navy py-24 text-white sm:py-32 lg:py-40">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
        >
          <SectionHeading center eyebrow="How it works" title="Three steps to cost per customer." className="[&_h2]:text-white [&>p]:text-[#2997ff]" />
        </motion.div>

        <ol ref={list} className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-3 lg:gap-5 *:min-w-0">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.t}
              className="relative flex flex-col overflow-hidden rounded-[28px] bg-white/[0.06] p-7 sm:p-9"
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease }}
            >
              <StepLine progress={progress} index={i} reduce={Boolean(reduce)} />

              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-cyan to-[#3d7dff] bg-clip-text text-[56px] leading-none font-semibold tracking-[-0.05em] text-transparent sm:text-[64px]" aria-hidden>
                  {i + 1}
                </span>
                <s.icon className="size-7 text-white/50" strokeWidth={1.5} aria-hidden />
              </div>
              <span className="sr-only">Step {i + 1}: </span>

              <h3 className="mt-8 text-[21px] leading-[1.2] font-semibold tracking-[-0.02em] sm:text-2xl">{s.t}</h3>
              <p className="mt-3 text-[17px] leading-[1.5] text-white/65">{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

/** Hairline across the top of a step that fills as the reader scrolls through the steps. */
function StepLine({ progress, index, reduce }: { progress: MotionValue<number>; index: number; reduce: boolean }) {
  const fill = useTransform(progress, [index / 3, (index + 1) / 3], [0, 1])
  return (
    <span className="absolute inset-x-0 top-0 h-[2px] bg-white/10" aria-hidden>
      <motion.span className="bg-brand absolute inset-0 origin-left" style={{ scaleX: reduce ? 1 : fill }} />
    </span>
  )
}
