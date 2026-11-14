"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"

const spring = { stiffness: 140, damping: 30, mass: 0.5 }

/**
 * "Settle into place": the child grows from slightly small to full size and
 * comes up to full opacity as it scrolls toward the middle of the screen.
 */
export function ScrollScale({ children, className, from = 0.92 }: { children: React.ReactNode; className?: string; from?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center 0.6"] })
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [from, 1]), spring)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.35, 1])

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { scale, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}

/**
 * A sentence that lights up word by word as it scrolls through the screen.
 * The words stay in one paragraph, so the text reads (and copies) exactly as written.
 */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] })
  const words = text.split(" ")

  // Same markup on server and client (no reduced-motion branch), so hydration always matches;
  // with reduced motion the words simply stay at full opacity.
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} still={Boolean(reduce)}>
          {w}
          {i < words.length - 1 ? " " : null}
        </Word>
      ))}
    </p>
  )
}

function Word({ children, progress, range, still }: { children: React.ReactNode; progress: MotionValue<number>; range: [number, number]; still: boolean }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return <motion.span style={still ? undefined : { opacity }}>{children}</motion.span>
}
