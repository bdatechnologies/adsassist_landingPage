"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { ButtonLink } from "@/components/ui"

const ease = [0.22, 1, 0.36, 1] as const

export function CtaBand({ title, body, button = "Book a demo" }: { title: string; body?: string; button?: string }) {
  const reduce = useReducedMotion()
  const panel = useRef<HTMLDivElement>(null)

  // Spotlight follows the cursor; rests top-right when the cursor is away.
  const mx = useSpring(useMotionValue(80), { stiffness: 220, damping: 26 })
  const my = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 })
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, rgb(7 92 246 / 0.38), rgb(116 0 239 / 0.14) 40%, transparent 70%)`
  const gridMask = useMotionTemplate`radial-gradient(360px circle at ${mx}% ${my}%, black, transparent 75%)`

  // Magnetic button
  const bx = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 })
  const by = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 })

  function onMove(e: React.PointerEvent) {
    if (reduce || !panel.current) return
    const r = panel.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 100)
    my.set(((e.clientY - r.top) / r.height) * 100)
  }
  function onLeave() {
    mx.set(80)
    my.set(0)
  }
  function onBtnMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    bx.set((e.clientX - r.left - r.width / 2) * 0.25)
    by.set((e.clientY - r.top - r.height / 2) * 0.35)
  }
  function onBtnLeave() {
    bx.set(0)
    by.set(0)
  }

  const words = title.split(" ")

  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28">
      <motion.div
        ref={panel}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-navy text-white"
        initial={reduce ? false : { opacity: 0, y: 20, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease }}
      >
        {/* Spotlight */}
        <motion.div className="absolute inset-0" style={{ background: spotlight }} aria-hidden />
        {/* Grid, revealed only around the spotlight */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.07) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: gridMask,
            WebkitMaskImage: gridMask,
          }}
          aria-hidden
        />
        {/* Top hairline that draws in */}
        <motion.div
          className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-cyan to-transparent"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          aria-hidden
        />

        <div className="relative grid items-end gap-10 px-6 py-14 sm:px-12 sm:py-20 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-16">
          <div>
            <h2 className="max-w-3xl text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[56px]">
              <span className="sr-only">{title}</span>
              <span aria-hidden>
                {words.map((w, i) => (
                  <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span
                      className="inline-block"
                      initial={reduce ? false : { y: "105%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.03, ease }}
                    >
                      {w}
                    </motion.span>
                    {i < words.length - 1 ? " " : null}
                  </span>
                ))}
              </span>
            </h2>
            {body ? (
              <motion.p
                className="mt-5 max-w-xl text-lg leading-relaxed text-white/70"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 + words.length * 0.03, ease }}
              >
                {body}
              </motion.p>
            ) : null}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 + words.length * 0.03, ease }}
          >
            <motion.div onPointerMove={onBtnMove} onPointerLeave={onBtnLeave} style={{ x: bx, y: by }} className="inline-block p-3 -m-3">
              <ButtonLink
                href="/demo"
                size="lg"
                arrow
                variant="secondary"
                className="h-14 border-transparent px-8 hover:border-transparent text-[17px] shadow-[0_10px_40px_-10px_rgb(5_196_244/0.6)] hover:shadow-[0_14px_50px_-10px_rgb(5_196_244/0.85)] [&_svg]:transition-transform hover:[&_svg]:translate-x-1"
              >
                {button}
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
