import { Check, Eye, KeyRound, Layers, Lock, ShieldCheck, Users } from "lucide-react"
import { CtaBand } from "@/components/cta"
import { ExcelCompare, ExcelQuote } from "@/components/excel-compare"
import { FaqSection, type Faq } from "@/components/faq"
import { HowItWorks } from "@/components/how-it-works"
import { Industries } from "@/components/industries"
import { AgencySwitcher } from "@/components/mock/agency-switcher"
import { DashboardMock } from "@/components/mock/dashboard-mock"
import { AudiencesMock, InsightsMock, KeywordsMock, PipelineMock, SendBackMock, TrackingMock } from "@/components/mock/feature-mocks"
import { ProductFilm } from "@/components/mock/product-film"
import { ProblemNumbers } from "@/components/problem-numbers"
import { Reveal } from "@/components/reveal"
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui"

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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [&>*]:min-w-0" aria-hidden />
        <div className="bg-brand absolute -top-48 right-[-10rem] h-[30rem] w-[30rem] rounded-full opacity-[0.13] blur-3xl" aria-hidden />
        <Container className="relative grid items-center gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:pb-28 [&>*]:min-w-0">
          <Reveal>
            <Eyebrow>From click to customer</Eyebrow>
            <h1 className="mt-4 text-[42px] leading-[1.05] font-semibold tracking-[-0.025em] text-balance sm:text-6xl">
              Know which ad brought <span className="text-brand">every customer.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft sm:text-xl">
              AdsAssist shows you which of those ads actually brought you paying customers, so you can put more money behind the ones that work and stop wasting it on the rest.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo" size="lg" arrow>
                Book a demo
              </ButtonLink>
              <ButtonLink href="#how-it-works" size="lg" variant="secondary">
                See how it works
              </ButtonLink>
            </div>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5">
                <Lock className="size-3.5" aria-hidden /> Read-only access
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-good" aria-hidden /> Updates every 15 min
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ProductFilm />
          </Reveal>
        </Container>
      </section>

      {/* Problem */}
      <section className="border-y border-line bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The problem"
              title="Your ad platforms count clicks. Your business counts customers."
              lead="Google reports 120 conversions. Meta reports 85. Your sales team closed 9. Which campaign did those 9 come from? Nobody knows, so next month's budget goes to whatever looked cheapest per lead."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ProblemNumbers />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3 [&>*]:min-w-0">
            {[
              { icon: Layers, t: "Two dashboards, two sets of numbers.", d: "Google Ads and Meta count results differently, in different places." },
              { icon: KeyRound, t: "Cheap leads can be expensive.", d: "A ₹150 lead that never picks up the phone costs more than a ₹600 lead who buys." },
              { icon: Eye, t: "Leads go missing after the form.", d: "You can't see where people drop off between the click and the sale." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-card">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-soft text-blue [&>*]:min-w-0">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{c.t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Excel */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] [&>*]:min-w-0">
          <Reveal>
            <SectionHeading
              eyebrow="No more waiting for the Excel report"
              title="Still checking your ads in an Excel sheet?"
              lead="For most businesses, someone updates an Excel sheet by hand once a day, and it gets compared with old numbers once a month. By then the money is already spent. With AdsAssist, you open your dashboard whenever you want and see where every rupee went, compared with last week or last month in one click."
            />
            <ExcelQuote>When your agency or media buyer knows you can check anytime, they stay on their toes.</ExcelQuote>
          </Reveal>
          <Reveal delay={0.1}>
            <ExcelCompare />
          </Reveal>
        </Container>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Features */}
      <section id="features" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading center eyebrow="Features" title="Everything between the ad click and the sale." />
          </Reveal>
          <div className="mt-16 space-y-24 sm:space-y-32">
            {FEATURES.map((f, i) => (
              <div key={f.id} id={f.id} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
                <Reveal className={i % 2 ? "lg:order-2" : undefined}>
                  <Eyebrow>{f.tag}</Eyebrow>
                  <h3 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance">{f.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">{f.body}</p>
                  {f.points.length ? (
                    <ul className="mt-6 space-y-3">
                      {f.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue-soft [&>*]:min-w-0">
                            <Check className="size-3 text-blue" aria-hidden />
                          </span>
                          <span className="text-ink-soft">{p}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>
                <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : undefined}>
                  {f.mock}
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <Industries />

      {/* Agencies */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <Reveal>
            <SectionHeading
              eyebrow="For agencies"
              title="One login for every client."
              lead="A workspace per client, each with its own ad accounts, currency and time zone. Clients get view-only access to their own numbers."
            />
            <ul className="mt-6 space-y-3">
              {["Roles: owner, admin, analyst, viewer", "A weekly report per client", "Switch between clients in one click"].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue-soft">
                    <Check className="size-3 text-blue" aria-hidden />
                  </span>
                  <span className="text-ink-soft">{p}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/agencies" variant="secondary" arrow className="mt-8">
              AdsAssist for agencies
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.1}>
            <AgencySwitcher />
          </Reveal>
        </Container>
      </section>

      {/* Security */}
      <section id="security" className="scroll-mt-20 border-t border-line bg-mist py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Security" title="Built to be trusted with your data." />
          </Reveal>
          <Reveal delay={0.1}>
            {/* Spec sheet: one panel, cells split by hairlines */}
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card sm:grid-cols-2">
              {[
                { icon: KeyRound, t: "Official sign-in", d: <>Connects through official Google and Meta sign-in. We never see your passwords.</> },
                { icon: Eye, t: "Read-only Google Ads", d: <>AdsAssist reports; it never changes campaigns, bids or budgets.</> },
                {
                  icon: ShieldCheck,
                  t: "Hashed contact details",
                  d: (
                    <>
                      Contact details are hashed (<code className="font-mono text-[0.9em] whitespace-nowrap text-ink">SHA-256</code>) before they reach any ad platform.
                    </>
                  ),
                },
                { icon: Users, t: "Role-based access", d: <>Role-based access in every workspace.</> },
              ].map((s) => (
                <li key={s.t} className="group relative bg-paper p-6 sm:p-8">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-blue transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-soft text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <FaqSection items={FAQS} />
      <CtaBand title="Stop paying for leads that never close." body="Book a demo and we'll show you, on your own ad accounts, which campaigns bring customers." />
    </>
  )
}
