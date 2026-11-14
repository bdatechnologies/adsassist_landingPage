import Link from "next/link"
import { ArrowRight, Building2, GraduationCap, Landmark, MonitorSmartphone, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Container, SectionHeading } from "@/components/ui"
import { INDUSTRIES } from "@/lib/site"

const ICONS: Record<(typeof INDUSTRIES)[number]["href"], LucideIcon> = {
  "/edtech": GraduationCap,
  "/saas": MonitorSmartphone,
  "/fintech": Landmark,
  "/real-estate": Building2,
}

export function Industries() {
  return (
    <section className="border-y border-line bg-mist py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Built for your business" title="Made for businesses where a lead isn't a sale yet." />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.href]
            return (
              <Reveal key={ind.href} delay={i * 0.08} className="h-full">
                <Link
                  href={ind.href}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-paper transition-colors duration-300 hover:border-blue/30"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-soft text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold">{ind.label}</h3>
                    </div>
                    <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{ind.blurb}</p>
                  </div>

                  <span className="flex items-center justify-between border-t border-line px-6 py-4 text-sm font-semibold text-blue">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
