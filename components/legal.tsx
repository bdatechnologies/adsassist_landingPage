import { Container } from "@/components/ui"

/** A legal fact still to be filled in: shown, highlighted, instead of silently missing. */
export function Fill({ value, label }: { value: string; label: string }) {
  if (value) return <>{value}</>
  return <mark className="rounded bg-amber-100 px-1 text-amber-800">[{label}]</mark>
}

export function LegalPage({
  title,
  lastUpdated,
  sections,
  intro,
}: {
  title: string
  lastUpdated: string
  intro: React.ReactNode
  sections: { id: string; title: string; body: React.ReactNode }[]
}) {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[15rem_1fr] [&>*]:min-w-0">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1 text-sm" aria-label="On this page">
            <p className="mb-3 font-semibold">On this page</p>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block rounded-md py-1 text-ink-muted transition-colors hover:text-ink">
                {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-ink-muted">
            Last updated: <Fill value={lastUpdated} label="date" />
          </p>
          <div className="legal mt-8 text-[17px] leading-relaxed text-ink-soft">{intro}</div>
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="legal mt-12 scroll-mt-24 text-[17px] leading-relaxed text-ink-soft">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">{s.title}</h2>
              <div className="mt-4">{s.body}</div>
            </section>
          ))}
        </article>
      </div>
    </Container>
  )
}
