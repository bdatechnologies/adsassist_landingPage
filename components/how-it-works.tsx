"use client"

import { motion, useReducedMotion } from "motion/react"
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

const ease = [0.22, 1, 0.36, 1] as const

export function HowItWorks() {
  const reduce = useReducedMotion()

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-navy py-20 text-white sm:py-28">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeading eyebrow="How it works" title="Three steps to cost per customer." className="[&_h2]:text-white [&_p]:text-cyan" />
        </motion.div>

        <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6 [&>*]:min-w-0">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.t}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-7"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
            >
              {/* Big ghost numeral: the step number */}
              <span
                className="pointer-events-none absolute -top-6 -right-2 text-[140px] leading-none font-bold tracking-tighter text-transparent select-none [-webkit-text-stroke:1px_rgb(255_255_255/0.08)]"
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="sr-only">Step {i + 1}: </span>

              <span className="relative grid size-11 place-items-center rounded-xl bg-white/[0.07] text-cyan ring-1 ring-white/10">
                <s.icon className="size-5" aria-hidden />
              </span>

              <h3 className="relative mt-6 text-xl font-semibold tracking-tight">{s.t}</h3>
              <p className="relative mt-3 leading-relaxed text-white/65">{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
