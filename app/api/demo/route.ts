import { NextResponse } from "next/server"

const FIELDS = ["name", "email", "phone", "company", "industry", "adSpend", "message"] as const
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "")

/**
 * Receives "Book a demo" requests and forwards them to DEMO_WEBHOOK_URL (an AdsAssist incoming
 * webhook), so the URL never reaches the browser. Without it the form falls back to email.
 */
export async function POST(req: Request) {
  const target = process.env.DEMO_WEBHOOK_URL
  if (!target) return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 })

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, reason: "bad_request" }, { status: 400 })
  }
  // Honeypot: real people never fill the hidden "website" field.
  if (clip(body.website, 200)) return NextResponse.json({ ok: true })

  const data = Object.fromEntries(FIELDS.map((f) => [f, clip(body[f], f === "message" ? 2000 : 200)]))
  if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 })
  }

  try {
    const res = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "demo_request", source: "adsassist.in", page: clip(body.page, 300), submittedAt: new Date().toISOString(), ...data }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, reason: "upstream" }, { status: 502 })
  }
}
