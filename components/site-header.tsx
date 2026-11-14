"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ButtonLink, Container } from "@/components/ui"
import { APP_URL, INDUSTRIES } from "@/lib/site"
import { cn } from "@/lib/cn"

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/agencies", label: "For agencies" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuFor, setMenuFor] = useState(pathname)
  // Close the mobile menu on navigation without an effect: the menu belongs to one path.
  const mobileOpen = open && menuFor === pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || mobileOpen ? "border-line bg-paper/85 backdrop-blur-xl" : "border-transparent bg-paper/0",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="AdsAssist home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo.svg" alt="AdsAssist" width={147} height={36} className="h-8 w-auto dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo_For_Dark.svg" alt="AdsAssist" width={147} height={36} className="hidden h-8 w-auto dark:block" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {LINKS.slice(0, 2).map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname === l.href}>
              {l.label}
            </NavLink>
          ))}
          <div className="group relative">
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink",
                INDUSTRIES.some((i) => i.href === pathname) && "text-ink",
              )}
              aria-haspopup="true"
            >
              Industries <ChevronDown className="size-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden />
            </button>
            <div className="invisible absolute top-full left-1/2 w-80 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-line bg-paper p-2 shadow-float">
                {INDUSTRIES.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-mist">
                    <span className="block text-[15px] font-semibold">{i.label}</span>
                    <span className="block text-sm leading-snug text-ink-muted">{i.blurb}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink href="/agencies" active={pathname === "/agencies"}>
            For agencies
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <ButtonLink href={APP_URL} variant="ghost" size="sm">
            Log in
          </ButtonLink>
          <ButtonLink href="/demo" size="sm">
            Book a demo
          </ButtonLink>
        </div>

        <div className="-mr-2 flex items-center gap-1 lg:hidden">
        <ThemeToggle />
        <button
          className="rounded-lg p-2"
          onClick={() => {
            setMenuFor(pathname)
            setOpen((o) => !(o && menuFor === pathname))
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line lg:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {[LINKS[0], LINKS[1], ...INDUSTRIES.map((i) => ({ href: i.href, label: i.label })), LINKS[2]].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 text-base font-medium">
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <ButtonLink href={APP_URL} variant="secondary">
                  Log in
                </ButtonLink>
                <ButtonLink href="/demo">Book a demo</ButtonLink>
              </div>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn("rounded-lg px-3 py-2 text-[15px] font-medium transition-colors hover:text-ink", active ? "text-ink" : "text-ink-soft")}
    >
      {children}
    </Link>
  )
}
