"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { CONTACT_EMAIL } from "@/lib/site"

const INDUSTRIES = ["EdTech", "SaaS", "Fintech / lending", "Real estate", "Marketing agency", "Other"]
const SPEND = ["Under ₹1 lakh / month", "₹1–5 lakh / month", "₹5–20 lakh / month", "Over ₹20 lakh / month"]

const input =
  "h-11 w-full rounded-xl border border-line-strong bg-paper px-3.5 text-[15px] outline-none transition-colors placeholder:text-ink-muted focus:border-blue focus:ring-4 focus:ring-blue/10"

export function DemoForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries()) as Record<string, string>
    setState("sending")
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.href }),
      })
      if (res.ok) return setState("done")
      if (res.status === 503) {
        // Not wired to a webhook yet: hand the request to the visitor's email app instead.
        const lines = [`Name: ${data.name}`, `Email: ${data.email}`, `Phone: ${data.phone}`, `Company: ${data.company}`, `Industry: ${data.industry}`, `Ad spend: ${data.adSpend}`, "", data.message]
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("AdsAssist demo request")}&body=${encodeURIComponent(lines.join("\n"))}`
        return setState("idle")
      }
      setState("error")
    } catch {
      setState("error")
    }
  }

  return (
    <AnimatePresence mode="wait">
      {state === "done" ? (
        <motion.div key="done" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center">
          <CheckCircle2 className="mx-auto size-12 text-good" aria-hidden />
          <h2 className="mt-4 text-2xl font-semibold">Thanks, we&apos;ll be in touch.</h2>
          <p className="mt-2 text-ink-soft">We usually reply within one working day to fix a time for your demo.</p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" exit={{ opacity: 0 }}>
          <Field label="Your name" className="sm:col-span-1">
            <input name="name" required autoComplete="name" className={input} />
          </Field>
          <Field label="Work email">
            <input name="email" type="email" required autoComplete="email" className={input} />
          </Field>
          <Field label="Phone">
            <input name="phone" type="tel" autoComplete="tel" className={input} placeholder="+91" />
          </Field>
          <Field label="Company">
            <input name="company" autoComplete="organization" className={input} />
          </Field>
          <Field label="Industry">
            <select name="industry" className={input} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {INDUSTRIES.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </Field>
          <Field label="Monthly ad spend">
            <select name="adSpend" className={input} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {SPEND.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </Field>
          <Field label="Anything we should know? (optional)" className="sm:col-span-2">
            <textarea name="message" rows={3} className={`${input} h-auto py-3`} />
          </Field>
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={state === "sending"}
              className="bg-brand inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgb(7_92_246/0.6)] transition-opacity disabled:opacity-70"
            >
              {state === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
              Book my demo
            </button>
            {state === "error" ? (
              <p className="mt-3 text-sm text-bad" role="alert">
                Something went wrong. Please email us at{" "}
                <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            ) : null}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`grid gap-1.5 ${className ?? ""}`}>
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}
