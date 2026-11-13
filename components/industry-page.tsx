import type { Metadata } from "next"
import { Check } from "lucide-react"
import { CtaBand } from "@/components/cta"
import { FaqSection } from "@/components/faq"
import { PipelineMock } from "@/components/mock/feature-mocks"
import { Reveal } from "@/components/reveal"
import { Badge, ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui"
import type { IndustryContent } from "@/content/industries"

export const industryMetadata = (c: IndustryContent): Metadata => ({
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: { canonical: `/${c.slug}` },
  openGraph: { title: c.metaTitle, description: c.metaDescription, url: `/${c.slug}` },
})

/** Shared layout for the industry and agency pages: same sections, their own words. */
export function IndustryPage({ c }: { c: IndustryContent }) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [&>*]:min-w-0" aria-hidden />
        <div className="bg-brand absolute -top-48 left-[-10rem] h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-3xl" aria-hidden />
        <Container className="relative grid items-center gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1fr_1fr] lg:pb-28 [&>*]:min-w-0">
          <Reveal>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[40px] leading-[1.06] font-semibold tracking-[-0.025em] text-balance sm:text-[56px]">{c.headline}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">{c.subhead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo" size="lg" arrow>
                Book a demo
              </ButtonLink>
              <ButtonLink href="#how" size="lg" variant="secondary">
                How it works
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <PipelineMock stages={c.stages} />
            <p className="mt-3 text-center text-xs text-ink-muted">Sample data</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-mist py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="The problem" title={c.problem.headline} />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3 [&>*]:min-w-0">
            {c.problem.cards.map((card, i) => (
              <Reveal key={card.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-card">
                  <span className="text-brand text-sm font-semibold">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{card.t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{card.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-line p-8 text-center shadow-card sm:p-12">
              <Eyebrow className="justify-center">{c.excel.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{c.excel.headline}</h2>
              <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-soft">{c.excel.body}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="how" className="scroll-mt-20 bg-navy py-20 text-white sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How AdsAssist works for you" title={c.how.headline} className="[&_h2]:text-white [&_p]:text-cyan" />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
            {c.how.steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <li className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="bg-brand grid size-10 place-items-center rounded-xl font-semibold [&>*]:min-w-0">{i + 1}</span>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] [&>*]:min-w-0">
          <Reveal>
            <SectionHeading eyebrow="What you get" title="Numbers your business actually runs on." />
          </Reveal>
          <ul className="grid gap-3 [&>*]:min-w-0">
            {c.get.map((g, i) => (
              <Reveal key={g.t} delay={i * 0.06}>
                <li className="flex gap-4 rounded-2xl border border-line p-5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-blue-soft [&>*]:min-w-0">
                    <Check className="size-3.5 text-blue" aria-hidden />
                  </span>
                  <p className="leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">{g.t}</span> {g.d}
                    {g.soon ? (
                      <span className="ml-2 align-middle">
                        <Badge tone="soon">Coming soon</Badge>
                      </span>
                    ) : null}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <div className="border-t border-line">
        <FaqSection items={c.faqs} />
      </div>
      <CtaBand title={c.cta} />
    </>
  )
}
