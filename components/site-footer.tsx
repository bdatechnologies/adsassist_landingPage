import Link from "next/link"
import { Container } from "@/components/ui"
import { COMPANY } from "@/lib/site"

// Exactly the footer line of the copy doc (Home.md, section 12), in its order.
const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/edtech", label: "EdTech" },
  { href: "/saas", label: "SaaS" },
  { href: "/fintech", label: "Fintech" },
  { href: "/real-estate", label: "Real estate" },
  { href: "/agencies", label: "For agencies" },
  { href: "/about", label: "About" },
  { href: "/#security", label: "Security" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms" },
]

export function SiteFooter() {
  return (
    <footer className="bg-mist">
      <Container className="py-12 sm:py-14">
        <Link href="/" className="inline-block" aria-label="AdsAssist home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo.svg" alt="AdsAssist" width={147} height={36} className="h-7 w-auto dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo_For_Dark.svg" alt="AdsAssist" width={147} height={36} className="hidden h-7 w-auto dark:block" />
        </Link>

        <nav aria-label="Footer" className="mt-8">
          <ul className="grid grid-cols-2 gap-x-6 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center text-sm text-ink-soft transition-colors hover:text-ink sm:min-h-9">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AdsAssist</p>
          <p>A Product by {COMPANY}</p>
        </div>
      </Container>
    </footer>
  )
}
