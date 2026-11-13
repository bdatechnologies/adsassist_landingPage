import type { Metadata } from "next"
import { Container } from "@/components/ui"
import { CONTACT_EMAIL, COMPANY } from "@/lib/site"

export const metadata: Metadata = { title: "Privacy policy", alternates: { canonical: "/privacy" } }

// Placeholder until the legal text is final.
export default function Page() {
  return (
    <Container className="max-w-3xl py-20 sm:py-28">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy policy</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">
        This page will set out how AdsAssist collects, uses and protects data. It is being finalised by {COMPANY}.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        Until then, write to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-blue hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        with any question.
      </p>
    </Container>
  )
}
