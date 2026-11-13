import type { Metadata } from "next"
import { Check } from "lucide-react"
import { Container, Eyebrow } from "@/components/ui"
import { DemoForm } from "./demo-form"

export const metadata: Metadata = {
  title: "Book a demo",
  description: "See, on your own ad accounts, which Google and Meta campaigns bring customers.",
  alternates: { canonical: "/demo" },
}

export default function DemoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [&>*]:min-w-0" aria-hidden />
      <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.1fr] [&>*]:min-w-0">
        <div>
          <Eyebrow>Book a demo</Eyebrow>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">See which of your campaigns bring customers.</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">Book a demo and we&apos;ll show you, on your own ad accounts, which campaigns bring customers.</p>
          <ul className="mt-8 space-y-3">
            {[
              "A walkthrough on your own Google Ads and Meta accounts",
              "Your exact price in the first few minutes, before you commit to anything",
              "Read-only access: AdsAssist never changes your campaigns",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-ink-soft">
                <Check className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-line bg-paper p-6 shadow-float sm:p-8">
          <DemoForm />
        </div>
      </Container>
    </section>
  )
}
