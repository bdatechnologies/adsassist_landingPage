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
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading center eyebrow="Built for your business" title="Made for businesses where a lead isn't a sale yet." />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 *:min-w-0">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.href]
            return (
              <Reveal key={ind.href} delay={i * 0.08} className="h-full">
                <Link
                  href={ind.href}
                  className="group flex h-full flex-col lg:min-h-64 rounded-[28px] bg-paper p-7 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:scale-[1.02] sm:p-8"
                >
                  <Icon className="size-8 text-blue" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em]">{ind.label}</h3>
                  <p className="mt-3 flex-1 text-[17px] leading-[1.45] text-pretty text-ink-soft">{ind.blurb}</p>
                  <span className="mt-6 grid size-9 place-items-center self-end rounded-full bg-mist text-ink transition-colors duration-300 group-hover:bg-blue group-hover:text-white" aria-hidden>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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
