"use client"

import { useId, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/cn"
import { Container, SectionHeading } from "@/components/ui"

export type Faq = { q: string; a: string }

const ease = [0.16, 1, 0.3, 1] as const

export function FaqSection({
  items,
  title = "Questions people ask",
  eyebrow = "FAQ",
}: {
  items: Faq[]
  title?: string
  /** Pass null to show the title alone. */
  eyebrow?: string | null
}) {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()
  const baseId = useId()

  return (
    <section className="scroll-mt-14 py-24 sm:py-32" id="faq">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
          >
            <SectionHeading center eyebrow={eyebrow ?? undefined} title={title} />
          </motion.div>

          <ul className="mt-12 border-t border-line sm:mt-16">
            {items.map((f, i) => {
              const isOpen = open === i
              const btnId = `${baseId}-q${i}`
              const panelId = `${baseId}-a${i}`
              return (
                <motion.li
                  key={f.q}
                  className="border-b border-line"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease }}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex min-h-11 w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-[19px] leading-snug font-semibold tracking-[-0.02em] sm:text-[21px]">{f.q}</span>
                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300",
                          isOpen ? "bg-ink text-paper" : "bg-mist text-ink group-hover:bg-line",
                        )}
                        aria-hidden
                      >
                        <motion.span initial={false} animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: reduce ? 0 : 0.4, ease }} className="grid">
                          <Plus className="size-4" strokeWidth={2.25} />
                        </motion.span>
                      </span>
                    </button>
                  </h3>

                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    inert={!isOpen}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: reduce ? 0 : 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={false}
                      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                      transition={{ duration: reduce ? 0 : 0.4, delay: isOpen && !reduce ? 0.08 : 0, ease }}
                      className="max-w-2xl pr-14 pb-7 text-[17px] leading-[1.55] text-ink-soft"
                    >
                      {f.a}
                    </motion.p>
                  </motion.div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />
    </section>
  )
}
