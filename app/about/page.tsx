import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { CtaBand } from "@/components/cta"
import { Reveal } from "@/components/reveal"
import { Container, Eyebrow, SectionHeading } from "@/components/ui"
import { CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: "AdsAssist comes from BDA Technologies, a team that has spent 10 years running ads, building funnels and connecting them to sales teams.",
  alternates: { canonical: "/about" },
}

const BELIEFS = [
  { t: "A lead is not a customer.", d: "We measure ads by sales, approvals and admissions, not form fills." },
  { t: "Owners should see their own numbers.", d: "Any time they want, without waiting for a report." },
  { t: "Your data stays yours.", d: "Read-only access to your ad accounts, hashed contact details, and no sharing beyond what you choose to send to Google and Meta." },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [&>*]:min-w-0" aria-hidden />
        <Container className="relative pt-16 pb-20 sm:pt-24 sm:pb-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>About AdsAssist</Eyebrow>
            <h1 className="mt-4 text-[40px] leading-[1.06] font-semibold tracking-[-0.025em] text-balance sm:text-6xl">
              Built by people who have run ads for <span className="text-brand">10 years.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft sm:text-xl">
              AdsAssist comes from BDA Technologies, a team that has spent 10 years in marketing technology: running ads, building websites and funnels, and connecting them to sales teams.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-mist py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] [&>*]:min-w-0">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="We built the tool we needed." />
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>We run Google and Meta ads for our own products and for our clients, including lenders. Every month the same question came up: which ads actually brought customers?</p>
            <p>The answer was always split across Google, Meta, a CRM and someone&apos;s Excel sheet. By the time we put it together, the month was over and the money was spent.</p>
            <p className="font-medium text-ink">So we built AdsAssist. We used it on our own ads first, then on our clients&apos; ads. Now we&apos;re opening it to other businesses.</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What we believe" title="Three things we don't compromise on." />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3 [&>*]:min-w-0">
            {BELIEFS.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line p-7 shadow-card">
                  <span className="bg-brand block h-1 w-10 rounded-full" aria-hidden />
                  <h3 className="mt-6 text-xl font-semibold">{b.t}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-12 flex items-center gap-2 text-ink-soft">
              <Mail className="size-4 text-blue" aria-hidden /> Write to us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-blue hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand title="Want to see your own numbers?" body="Book a demo and we'll show you, on your own ad accounts, which campaigns bring customers." />
    </>
  )
}
