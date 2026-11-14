import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SITE_URL } from "@/lib/site"
import { THEME_SCRIPT } from "@/lib/theme"
import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "AdsAssist: know which ad brought every customer", template: "%s · AdsAssist" },
  description:
    "AdsAssist connects Google Ads and Meta to your website, CRM and sales pipeline, so you see which ads bring paying customers and stop wasting budget on the rest.",
  openGraph: { type: "website", siteName: "AdsAssist", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The theme script adds the `dark` class before hydration, hence suppressHydrationWarning.
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-screen overflow-x-clip">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-paper focus:px-4 focus:py-2 focus:shadow-card">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
