"use client"

import { useId, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/cn"
import { Container, SectionHeading } from "@/components/ui"

export type Faq = { q: string; a: string }

const ease = [0.22, 1, 0.36, 1] as const

export function FaqSection({ items, title = "Questions people ask" }: { items: Faq[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()
  const baseId = useId()

  return (
    <section className="py-20 sm:py-28" id="faq">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16 [&>*]:min-w-0">
        <motion.div
          className="lg:sticky lg:top-28 lg:self-start"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeading eyebrow="FAQ" title={title} />
        </motion.div>

        <ul className="border-t border-line">
          {items.map((f, i) => {
            const isOpen = open === i
            const btnId = `${baseId}-q${i}`
            const panelId = `${baseId}-a${i}`
            return (
              <motion.li
                key={f.q}
                className="relative border-b border-line"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
              >
                {/* Active marker: grows down the left edge of the open item */}
                <motion.span
                  className="bg-brand absolute top-0 -left-4 hidden w-0.5 origin-top rounded-full sm:block"
                  initial={false}
                  animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                  style={{ height: "100%" }}
                  transition={{ duration: reduce ? 0 : 0.45, ease }}
                  aria-hidden
                />

                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className={cn("tabular w-6 shrink-0 font-mono text-sm transition-colors duration-300", isOpen ? "text-blue" : "text-ink-muted/60")} aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-lg font-semibold transition-[color,transform] duration-300 group-hover:translate-x-1",
                          isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink",
                        )}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                        isOpen ? "border-transparent bg-blue text-white" : "border-line-strong text-ink-muted group-hover:border-ink-muted group-hover:text-ink",
                      )}
                      aria-hidden
                    >
                      <motion.span initial={false} animate={{ rotate: isOpen ? 135 : 0 }} transition={{ duration: reduce ? 0 : 0.4, ease }} className="grid">
                        <Plus className="size-4" />
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
                  transition={{ duration: reduce ? 0 : 0.45, ease }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={false}
                    animate={isOpen ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -6, filter: "blur(4px)" }}
                    transition={{ duration: reduce ? 0 : 0.4, delay: isOpen && !reduce ? 0.08 : 0, ease }}
                    className="max-w-2xl pb-6 pl-10 leading-relaxed text-ink-soft"
                  >
                    {f.a}
                  </motion.p>
                </motion.div>
              </motion.li>
            )
          })}
        </ul>
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
