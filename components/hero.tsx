"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { Lock } from "lucide-react"
import { ProductFilm } from "@/components/mock/product-film"
import { ButtonLink, Container, Eyebrow } from "@/components/ui"

const ease = [0.16, 1, 0.3, 1] as const

/** Text arrives in a soft cascade; each step lifts and sharpens from a slight blur. */
function Rise({ i, children, className }: { i: number; children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.08 + i * 0.09, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)

  // Copy drifts up and fades as the page scrolls away from it.
  const { scrollYProgress: leave } = useScroll({ target: section, offset: ["start start", "end start"] })
  const copyY = useTransform(leave, [0, 1], [0, -90])
  const copyOpacity = useTransform(leave, [0, 0.4], [1, 0])

  // The product screen settles from slightly small and tilted back to full size as it scrolls into place.
  const { scrollYProgress: enter } = useScroll({ target: stage, offset: ["start end", "start 0.2"] })
  const spring = { stiffness: 140, damping: 30, mass: 0.5 }
  const stageScale = useSpring(useTransform(enter, [0, 1], [0.9, 1]), spring)
  const stageTilt = useSpring(useTransform(enter, [0, 1], [12, 0]), spring)

  return (
    <section ref={section} className="relative overflow-hidden pt-14 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      <Container>
        <motion.div className="mx-auto max-w-4xl text-center" style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
          <Rise i={0}>
            <Eyebrow className="justify-center">From click to customer</Eyebrow>
          </Rise>
          <Rise i={1}>
            <h1 className="mt-4 text-[44px] leading-[1.04] font-semibold tracking-[-0.035em] text-balance sm:text-[64px] lg:text-[80px] lg:leading-[1.02]">
              Know which ad brought <span className="text-brand">every customer.</span>
            </h1>
          </Rise>
          <Rise i={2}>
            <p className="mx-auto mt-6 max-w-2xl text-[19px] leading-[1.45] tracking-[-0.012em] text-pretty text-ink-soft sm:mt-7 sm:text-[21px] lg:text-2xl lg:leading-[1.4]">
              AdsAssist shows you which of those ads actually brought you paying customers, so you can put more money behind the ones that work and stop wasting it on the rest.
            </p>
          </Rise>
          <Rise i={3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <ButtonLink href="/demo" size="lg" arrow className="w-full max-w-xs sm:w-auto">
                Book a demo
              </ButtonLink>
              <ButtonLink href="#how-it-works" size="lg" variant="secondary" className="w-full max-w-xs sm:w-auto">
                See how it works
              </ButtonLink>
            </div>
          </Rise>
          <Rise i={4}>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[13px] text-ink-muted sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Lock className="size-3.5" aria-hidden /> Read-only access
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-good" aria-hidden /> Update in 15 min
              </span>
            </p>
          </Rise>
        </motion.div>

        <div ref={stage} className="mx-auto mt-14 max-w-4xl [perspective:1600px] sm:mt-20">
          <motion.div
            className="origin-[50%_30%]"
            style={reduce ? undefined : { scale: stageScale, rotateX: stageTilt }}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease }}
          >
            <ProductFilm />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
