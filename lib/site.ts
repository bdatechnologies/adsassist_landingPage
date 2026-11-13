export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adsassist.in"
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.adsassist.in"
export const CONTACT_EMAIL = "office@bda.co.in"
export const COMPANY = "BDA Technologies Private Limited"

export const INDUSTRIES = [
  { href: "/edtech", label: "EdTech", blurb: "Know which ads bring people who buy your course, not just sign-ups." },
  { href: "/saas", label: "SaaS", blurb: "Find the ads that bring paying users, not just free sign-ups." },
  { href: "/fintech", label: "Fintech", blurb: "See cost per approval and per disbursal, not just cost per lead." },
  { href: "/real-estate", label: "Real estate", blurb: "Know which ads bring site visits and bookings, not just leads." },
] as const
