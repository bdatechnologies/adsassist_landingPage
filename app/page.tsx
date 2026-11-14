import { Check, Eye, KeyRound, Layers, ShieldCheck, Users } from "lucide-react"
import { CtaBand } from "@/components/cta"
import { ExcelCompare, ExcelQuote } from "@/components/excel-compare"
import { FaqSection, type Faq } from "@/components/faq"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Industries } from "@/components/industries"
import { AgencySwitcher } from "@/components/mock/agency-switcher"
import { DashboardMock } from "@/components/mock/dashboard-mock"
import { AudiencesMock, InsightsMock, KeywordsMock, PipelineMock, SendBackMock, TrackingMock } from "@/components/mock/feature-mocks"
import { ProblemNumbers } from "@/components/problem-numbers"
import { Reveal } from "@/components/reveal"
import { ScrollScale } from "@/components/scroll-motion"
import { Container, Eyebrow, SectionHeading } from "@/components/ui"
import { cn } from "@/lib/cn"

const FEATURES = [
  {
    id: "dashboard",
    tag: "One dashboard",
    title: "Google Ads and Meta, on one screen.",
    body: "Spend, leads, cost per lead and ROAS across every account, compared with the previous period.",
    points: [
      "Updated every 15 minutes, with a Sync now button",
      "Choose the numbers your business tracks, or start from a lending, lead-gen or e-commerce view",
      "Filter by platform and campaign type",
      "A live view of today as it happens",
    ],
    mock: <DashboardMock />,
  },
  {
    id: "wasted-spend",
    tag: "Wasted spend",
    title: "Find the keywords eating your budget.",
    body: "Every Google Search keyword and search term, with what it spent and what it brought back.",
    points: [
      "Spend with zero conversions, flagged automatically",
      "Quality Score with its three parts",
      "Impression share lost to budget and to ad rank",
      "Search terms ready to add as keywords or block as negatives",
    ],
    mock: <KeywordsMock />,
  },
  {
    id: "tracking",
    tag: "Tracking",
    title: "Every visit. Every form. Every click ID.",
    body: "One line of code links each visitor, even the ones who leave a form half-filled, to the campaign that brought them.",
    points: [
      "Captures Google and Meta click IDs and UTM tags",
      "Records form starts and drop-offs as well as submits",
      "Joins one person's visits across phone and laptop",
      "Consent mode for privacy",
    ],
    mock: <TrackingMock />,
  },
  {
    id: "pipeline",
    tag: "Lead pipeline",
    title: "See which campaigns bring leads that close.",
    body: "Leads from your website, your CRM and Meta lead forms, matched to their campaign and followed to the sale.",
    points: ["Your own pipeline stages", "Full history: who moved each lead, and when", "Revenue and ROAS from leads you actually won", "Leads with no campaign attached get flagged"],
    mock: <PipelineMock />,
  },
  {
    id: "send-back",
    tag: "Send results back",
    title: "Teach Google and Meta what a good lead looks like.",
    body: "When a lead is approved or buys, AdsAssist sends that result back to the ad platforms. Their bidding then looks for more people like your customers.",
    points: ["Google Ads offline conversions and Meta Conversions API", "You choose which stages get sent", "Contact details hashed before upload", "Every upload logged, and retried if it fails"],
    mock: <SendBackMock />,
  },
  {
    id: "audiences",
    tag: "Audiences",
    title: "Retarget the people who almost converted.",
    body: "Build audiences from real leads and form abandoners. AdsAssist keeps them synced to Google and Meta every day.",
    points: [],
    mock: <AudiencesMock />,
  },
  {
    id: "insights",
    tag: "Insights and alerts",
    title: "Know what to fix before Monday's meeting.",
    body: "AdsAssist reads your numbers and tells you what needs attention.",
    points: [
      "Campaigns spending with no leads, costs creeping up, and the campaign worth scaling",
      "An AI summary of the week with a short action list, each item linked to its campaign",
      "Email alerts when spend, leads or cost per lead cross your limit",
      "A weekly report in your inbox",
    ],
    mock: <InsightsMock />,
  },
]

const FAQS: Faq[] = [
  { q: "Does AdsAssist change my campaigns?", a: "No. It reads your data and sends conversions and audiences back. Campaign changes stay with you." },
  { q: "How fresh is the data?", a: "It syncs every 15 minutes, and you can sync on demand. Google and Meta keep revising recent numbers, so each sync re-checks the last two days." },
  { q: "Do I need a developer?", a: "Only to paste one line of code on your site, or to connect your CRM through our API." },
  { q: "Which ad platforms do you support?", a: "Google Ads, including manager accounts, and Meta (Facebook and Instagram)." },
  { q: "Does it work with Performance Max?", a: "Yes for spend and results. Keyword and search-term reports cover Search campaigns, since that is what Google shares." },
  { q: "What does it cost?", a: "Pricing is custom to your business. Book the demo and we quote your exact price in the first few minutes, before you commit to anything." },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem */}
      <section className="bg-mist py-24 sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <SectionHeading center eyebrow="The problem" title="Your ad platforms count clicks. Your business counts customers." className="max-w-4xl" />
          </Reveal>
          {/* The body copy: its first three sentences set as figures, the rest as a closing statement. */}
          <ProblemNumbers rest="Which campaign did those 9 come from? Nobody knows, so next month's budget goes to whatever looked cheapest per lead." />
          <div className="mt-20 grid gap-4 sm:mt-28 md:grid-cols-3 lg:gap-5 *:min-w-0">
            {[
              { icon: Layers, t: "Two dashboards, two sets of numbers.", d: "Google Ads and Meta count results differently, in different places." },
              { icon: KeyRound, t: "Cheap leads can be expensive.", d: "A ₹150 lead that never picks up the phone costs more than a ₹600 lead who buys." },
              { icon: Eye, t: "Leads go missing after the form.", d: "You can't see where people drop off between the click and the sale." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-[28px] bg-paper p-7 sm:p-8">
                  <c.icon className="size-8 text-blue" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-6 text-[21px] leading-[1.2] font-semibold tracking-[-0.02em] sm:text-2xl">{c.t}</h3>
                  <p className="mt-3 text-[17px] leading-[1.5] text-ink-soft">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Excel */}
      <section className="py-24 sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="No more waiting for the Excel report"
              title="Still checking your ads in an Excel sheet?"
              lead="For most businesses, someone updates an Excel sheet by hand once a day, and it gets compared with old numbers once a month. By then the money is already spent. With AdsAssist, you open your dashboard whenever you want and see where every rupee went, compared with last week or last month in one click."
              className="max-w-3xl"
            />
          </Reveal>
          <div className="mt-14 sm:mt-20">
            <ExcelCompare />
          </div>
          <ExcelQuote>When your agency or media buyer knows you can check anytime, they stay on their toes.</ExcelQuote>
        </Container>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Features */}
      <section id="features" className="scroll-mt-14 py-24 sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <SectionHeading center title="Features" />
          </Reveal>
          <div className="mt-16 space-y-28 sm:mt-24 sm:space-y-36 lg:space-y-44">
            {FEATURES.map((f, i) => (
              <div
                key={f.id}
                id={f.id}
                className={cn(
                  "grid scroll-mt-24 items-center gap-10 lg:gap-16 *:min-w-0",
                  // The product screen always gets the wider column, whichever side it is on.
                  i % 2 ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
                )}
              >
                <Reveal className={i % 2 ? "lg:order-2" : undefined}>
                  <Eyebrow>{f.tag}</Eyebrow>
                  <h3 className="mt-3 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance sm:text-[40px] sm:leading-[1.08]">{f.title}</h3>
                  <p className="mt-5 text-[17px] leading-[1.5] tracking-[-0.01em] text-pretty text-ink-soft sm:text-[19px]">{f.body}</p>
                  {f.points.length ? <PointList points={f.points} className="mt-8" /> : null}
                </Reveal>
                <ScrollScale className={i % 2 ? "lg:order-1" : undefined}>
                  {f.mock}
                </ScrollScale>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <Industries />

      {/* Agencies */}
      <section className="py-24 sm:py-32 lg:py-40">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 *:min-w-0">
          <Reveal>
            <SectionHeading
              eyebrow="For agencies"
              title="One login for every client."
              lead="A workspace per client, each with its own ad accounts, currency and time zone. Clients get view-only access to their own numbers."
            />
            <PointList points={["Roles: owner, admin, analyst, viewer", "A weekly report per client", "Switch between clients in one click"]} className="mt-8" />
          </Reveal>
          <ScrollScale>
            <AgencySwitcher />
          </ScrollScale>
        </Container>
      </section>

      {/* Security */}
      <section id="security" className="scroll-mt-14 bg-mist py-24 sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <SectionHeading center eyebrow="Security" title="Built to be trusted with your data." />
          </Reveal>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-4 sm:mt-20 sm:grid-cols-2 lg:gap-5">
            {[
              { icon: KeyRound, d: <>Connects through official Google and Meta sign-in. We never see your passwords.</> },
              { icon: Eye, d: <>Read-only access to Google Ads. AdsAssist reports; it never changes campaigns, bids or budgets.</> },
              {
                icon: ShieldCheck,
                d: (
                  <>
                    Contact details are hashed (<code className="font-mono text-[0.9em] whitespace-nowrap">SHA-256</code>) before they reach any ad platform.
                  </>
                ),
              },
              { icon: Users, d: <>Role-based access in every workspace.</> },
            ].map((s, i) => (
              <li key={i} className="h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-[28px] bg-paper p-7 sm:p-10">
                    <s.icon className="size-8 text-blue" strokeWidth={1.5} aria-hidden />
                    <p className="mt-6 text-[19px] leading-[1.4] font-semibold tracking-[-0.02em] text-pretty sm:text-[21px]">{s.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection items={FAQS} title="FAQ" eyebrow={null} />
      <CtaBand title="Stop paying for leads that never close." body="Book a demo and we'll show you, on your own ad accounts, which campaigns bring customers." />
    </>
  )
}

/** Spec-sheet list: hairline rows with a small blue check. */
function PointList({ points, className }: { points: string[]; className?: string }) {
  return (
    <ul className={className}>
      {points.map((p) => (
        <li key={p} className="flex gap-3 border-t border-line py-3.5 text-[17px] leading-snug text-ink-soft last:border-b">
          <Check className="mt-0.5 size-5 shrink-0 text-blue" strokeWidth={2.25} aria-hidden />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  )
}
