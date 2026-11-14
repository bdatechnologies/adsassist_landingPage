"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { ButtonLink } from "@/components/ui"

const ease = [0.16, 1, 0.3, 1] as const

export function CtaBand({ title, body, button = "Book a demo" }: { title: string; body?: string; button?: string }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  // The black panel opens out to full size as it scrolls into view.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] })
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.92, 1]), { stiffness: 140, damping: 30, mass: 0.5 })

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.9, delay, ease },
  })

  return (
    <section className="px-3 pb-3 sm:px-6 sm:pb-6">
      <motion.div
        ref={ref}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-navy text-white sm:rounded-[40px]"
        style={reduce ? undefined : { scale }}
      >
        {/* A soft glow of the logo colours rising from below the button. */}
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-1/2 mx-auto h-full max-w-3xl rounded-full bg-[radial-gradient(closest-side,rgb(7_92_246/0.45),rgb(116_0_239/0.2)_55%,transparent)] blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-12 sm:py-32 lg:py-40">
          <motion.h2
            className="text-[36px] leading-[1.06] font-semibold tracking-[-0.035em] text-balance sm:text-[56px] lg:text-[72px] lg:leading-[1.03]"
            {...rise(0)}
          >
            {title}
          </motion.h2>
          {body ? (
            <motion.p className="mx-auto mt-6 max-w-2xl text-[19px] leading-[1.45] tracking-[-0.012em] text-pretty text-white/70 sm:text-[21px]" {...rise(0.1)}>
              {body}
            </motion.p>
          ) : null}
          <motion.div className="mt-10" {...rise(0.2)}>
            <ButtonLink href="/demo" size="xl" arrow>
              {button}
            </ButtonLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
