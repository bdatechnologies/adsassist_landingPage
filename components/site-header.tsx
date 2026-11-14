"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ButtonLink, Container } from "@/components/ui"
import { APP_URL, INDUSTRIES } from "@/lib/site"
import { cn } from "@/lib/cn"

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/agencies", label: "For agencies" },
]

const ease = [0.16, 1, 0.3, 1] as const

export function SiteHeader() {
  const pathname = usePathname()
  const reduce = useReducedMotion()
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

  // Full-screen menu: freeze the page behind it and let Escape close it.
  useEffect(() => {
    if (!mobileOpen) return
    const root = document.documentElement
    const prev = root.style.overflow
    root.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      root.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen])

  const mobileLinks = [LINKS[0], LINKS[1], ...INDUSTRIES.map((i) => ({ href: i.href, label: i.label })), LINKS[2]]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        // No backdrop blur while the menu is open: a backdrop-filter would trap the fixed full-screen menu inside the bar.
        mobileOpen
          ? "border-transparent bg-paper"
          : cn("backdrop-blur-xl backdrop-saturate-[1.8]", scrolled ? "border-line/70 bg-paper/75" : "border-transparent bg-paper/60"),
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-6 lg:h-[52px]">
        <Link href="/" className="-my-2 shrink-0 py-2" aria-label="AdsAssist home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo.svg" alt="AdsAssist" width={147} height={36} className="h-7 w-auto dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AdsAssist_Logo_For_Dark.svg" alt="AdsAssist" width={147} height={36} className="hidden h-7 w-auto dark:block" />
        </Link>

        <nav className="hidden h-full items-center gap-1 lg:flex" aria-label="Main">
          {LINKS.slice(0, 2).map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname === l.href}>
              {l.label}
            </NavLink>
          ))}

          {/* The flyout is positioned against the header, so it spans the full width of the page. */}
          <div className="group flex h-full items-center">
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-3 py-2 text-sm text-ink/80 transition-colors duration-200 hover:text-ink",
                INDUSTRIES.some((i) => i.href === pathname) && "text-ink",
              )}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown className="size-3.5 transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden />
            </button>
            {/* Dims the page while the flyout is open (no pointer events, so moving off the flyout closes it). */}
            <div
              className="pointer-events-none invisible absolute inset-x-0 top-full h-screen bg-black/20 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 dark:bg-black/60"
              aria-hidden
            />
            <div className="invisible absolute inset-x-0 top-full -translate-y-1 border-b border-line/70 bg-paper opacity-0 transition-[opacity,transform,visibility] duration-300 ease-[var(--ease-out-expo)] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Container className="grid grid-cols-4 gap-8 py-10">
                {INDUSTRIES.map((i) => (
                  <Link key={i.href} href={i.href} className="group/item -m-3 block rounded-2xl p-3 transition-colors duration-200 hover:bg-mist">
                    <span className="block text-[21px] font-semibold tracking-[-0.02em] text-ink">{i.label}</span>
                    <span className="mt-1.5 block text-sm leading-snug text-ink-muted">{i.blurb}</span>
                  </Link>
                ))}
              </Container>
            </div>
          </div>

          <NavLink href="/agencies" active={pathname === "/agencies"}>
            For agencies
          </NavLink>
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <ThemeToggle />
          <ButtonLink href={APP_URL} variant="ghost" size="sm">
            Log in
          </ButtonLink>
          <ButtonLink href="/demo" size="sm" className="ml-1">
            Book a demo
          </ButtonLink>
        </div>

        <div className="-mr-2.5 flex items-center lg:hidden">
          <ThemeToggle />
          <button
            className="grid size-11 place-items-center rounded-full"
            onClick={() => {
              setMenuFor(pathname)
              setOpen((o) => !(o && menuFor === pathname))
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {/* Two bars that cross into an X */}
            <span className="relative block h-3 w-[18px]" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-full rounded-full bg-ink transition-transform duration-300 ease-[var(--ease-out-expo)]",
                  mobileOpen ? "top-[5px] rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-full rounded-full bg-ink transition-transform duration-300 ease-[var(--ease-out-expo)]",
                  mobileOpen ? "top-[5px] -rotate-45" : "top-[8px]",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-14 bottom-0 overflow-y-auto bg-paper lg:hidden"
            aria-label="Mobile"
          >
            <Container className="flex min-h-full flex-col pt-4 pb-[max(2rem,env(safe-area-inset-bottom))]">
              <ul>
                {mobileLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={reduce ? false : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.04 + i * 0.03, ease }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-[28px] leading-tight font-semibold tracking-[-0.025em] text-ink/90 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-auto grid gap-3 pt-10 sm:grid-cols-2"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.04 + mobileLinks.length * 0.03, ease }}
              >
                <ButtonLink href="/demo" size="lg">
                  Book a demo
                </ButtonLink>
                <ButtonLink href={APP_URL} variant="secondary" size="lg">
                  Log in
                </ButtonLink>
              </motion.div>
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
      className={cn("rounded-full px-3 py-2 text-sm transition-colors duration-200 hover:text-ink", active ? "text-ink" : "text-ink/80")}
    >
      {children}
    </Link>
  )
}
