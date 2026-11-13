import Link from "next/link"
import { ArrowRight, Building2, Check, Eye, FileSpreadsheet, KeyRound, Layers, Lock, ShieldCheck, Users, X } from "lucide-react"
import { CtaBand } from "@/components/cta"
import { FaqSection, type Faq } from "@/components/faq"
import { DashboardMock } from "@/components/mock/dashboard-mock"
import { AudiencesMock, InsightsMock, KeywordsMock, PipelineMock, SendBackMock, TrackingMock } from "@/components/mock/feature-mocks"
import { ProductFilm } from "@/components/mock/product-film"
import { ProblemNumbers } from "@/components/problem-numbers"
import { Reveal } from "@/components/reveal"
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui"
import { INDUSTRIES } from "@/lib/site"

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
        <Container className="grid items-center gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <Reveal>
            <SectionHeading
              eyebrow="No more waiting for the Excel report"
              title="Still checking your ads in an Excel sheet?"
              lead="For most businesses, someone updates an Excel sheet by hand once a day, and it gets compared with old numbers once a month. By then the money is already spent. With AdsAssist, you open your dashboard whenever you want and see where every rupee went, compared with last week or last month in one click."
            />
            <p className="mt-6 border-l-2 border-blue pl-4 text-lg font-medium">When your agency or media buyer knows you can check anytime, they stay on their toes.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid overflow-hidden rounded-2xl border border-line shadow-card sm:grid-cols-2 [&>*]:min-w-0">
              <div className="bg-mist p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink-muted">
                  <FileSpreadsheet className="size-4" aria-hidden /> Before
                </p>
                <ul className="mt-5 space-y-4">
                  {["An Excel sheet, updated by hand once a day", "Compared with old data once a month", "You take the agency's word for it"].map((t) => (
                    <li key={t} className="flex gap-3 text-ink-soft">
                      <X className="mt-0.5 size-4 shrink-0 text-bad" aria-hidden /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-paper p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-blue">
                  <span className="bg-brand size-2 rounded-full" aria-hidden /> With AdsAssist
                </p>
                <ul className="mt-5 space-y-4">
                  {["Numbers that update on their own every 15 minutes", "Compare any two periods, any time you want", "You see the same numbers your agency sees"].map((t) => (
                    <li key={t} className="flex gap-3 font-medium">
                      <Check className="mt-0.5 size-4 shrink-0 text-good" aria-hidden /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-navy py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Three steps to cost per customer."
              className="[&_h2]:text-white [&_p]:text-cyan"
            />
          </Reveal>
          <ol className="relative mt-14 grid gap-6 md:grid-cols-3 [&>*]:min-w-0">
            <div className="bg-brand absolute top-6 right-[16%] left-[16%] hidden h-px opacity-60 md:block" aria-hidden />
            {[
              { t: "Connect Google Ads and Meta.", d: "Sign in with Google and Meta and pick your ad accounts. Your last 30 days load right away." },
              { t: "Add one line of code to your site.", d: "The AdsAssist pixel records visits and form fills and links each one to the ad that brought it. Prefer your CRM? Send leads through our API." },
              { t: "Follow every lead to the sale.", d: "Move leads through your own pipeline stages, or let your CRM update them. AdsAssist shows what each stage cost you, campaign by campaign." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.12}>
                <li className="relative">
                  <span className="bg-brand relative grid size-12 place-items-center rounded-2xl text-lg font-semibold shadow-[0_0_0_6px_var(--color-navy)] [&>*]:min-w-0">{i + 1}</span>
                  <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

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
      <section className="border-y border-line bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Built for your business" title="Made for businesses where a lead isn't a sale yet." />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.href} delay={i * 0.08}>
                <Link href={ind.href} className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-float">
                  <h3 className="text-lg font-semibold">{ind.label}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{ind.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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
                  <Check className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden />
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
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Security" title="Built to be trusted with your data." />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
            {[
              { icon: KeyRound, t: "Official sign-in", d: "Connects through official Google and Meta sign-in. We never see your passwords." },
              { icon: Eye, t: "Read-only Google Ads", d: "AdsAssist reports; it never changes campaigns, bids or budgets." },
              { icon: ShieldCheck, t: "Hashed contact details", d: "Contact details are hashed (SHA-256) before they reach any ad platform." },
              { icon: Users, t: "Role-based access", d: "Role-based access in every workspace." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6">
                  <s.icon className="size-6 text-blue" aria-hidden />
                  <h3 className="mt-4 font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection items={FAQS} />
      <CtaBand title="Stop paying for leads that never close." body="Book a demo and we'll show you, on your own ad accounts, which campaigns bring customers." />
    </>
  )
}

function AgencySwitcher() {
  const clients = [
    { n: "Sunrise Finance", s: "₹4.2L", l: "1,180 leads", c: "bg-blue" },
    { n: "Brightpath Academy", s: "₹2.7L", l: "2,340 sign-ups", c: "bg-meta" },
    { n: "Skyline Homes", s: "₹6.1L", l: "96 site visits", c: "bg-cyan" },
    { n: "Ledgerly", s: "₹1.9L", l: "212 paying users", c: "bg-good" },
  ]
  return (
    <div className="rounded-2xl border border-line bg-paper p-5 shadow-float">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Building2 className="size-4 text-blue" aria-hidden /> Growthline Agency · 4 clients
      </div>
      <div className="mt-4 space-y-2">
        {clients.map((c) => (
          <div key={c.n} className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 transition-colors hover:bg-mist">
            <span className={`grid size-8 place-items-center rounded-lg text-xs font-semibold text-white ${c.c}`}>{c.n[0]}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{c.n}</p>
              <p className="text-xs text-ink-muted">{c.l} this month</p>
            </div>
            <span className="tabular text-sm font-semibold">{c.s}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-muted">Sample data. Each client sees only their own workspace.</p>
    </div>
  )
}
