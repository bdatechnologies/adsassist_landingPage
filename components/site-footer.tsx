import Link from "next/link"
import { Container } from "@/components/ui"
import { COMPANY, CONTACT_EMAIL } from "@/lib/site"

const COLUMNS = [
  { title: "Product", links: [{ href: "/#features", label: "Features" }, { href: "/#how-it-works", label: "How it works" }, { href: "/#security", label: "Security" }, { href: "/demo", label: "Book a demo" }] },
  { title: "Industries", links: [{ href: "/edtech", label: "EdTech" }, { href: "/saas", label: "SaaS" }, { href: "/fintech", label: "Fintech" }, { href: "/real-estate", label: "Real estate" }, { href: "/agencies", label: "For agencies" }] },
  { title: "Company", links: [{ href: "/about", label: "About" }, { href: "/privacy", label: "Privacy policy" }, { href: "/terms", label: "Terms" }, { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL }] },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo.svg" alt="AdsAssist" width={147} height={36} className="h-8 w-auto dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo_For_Dark.svg" alt="AdsAssist" width={147} height={36} className="hidden h-8 w-auto dark:block" />
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">Know which ad brought every customer. Google Ads and Meta, connected to your leads and sales.</p>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold">{c.title}</p>
            <ul className="mt-3 space-y-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AdsAssist</p>
          <p>A product by {COMPANY}</p>
        </Container>
      </div>
    </footer>
  )
}
