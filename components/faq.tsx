import { Plus } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui"

export type Faq = { q: string; a: string }

export function FaqSection({ items, title = "Questions people ask" }: { items: Faq[]; title?: string }) {
  return (
    <section className="py-20 sm:py-28" id="faq">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] [&>*]:min-w-0">
        <SectionHeading eyebrow="FAQ" title={title} />
        <div className="divide-y divide-line border-y border-line">
          {items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="mt-1 size-5 shrink-0 text-ink-muted transition-transform duration-300 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
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
