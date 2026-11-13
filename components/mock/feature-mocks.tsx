"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import { AlertTriangle, ArrowRight, Check, MousePointerClick, Sparkles, TrendingUp, Users } from "lucide-react"
import { cn } from "@/lib/cn"
import { AppWindow, useLoopInView } from "./shared"

/* ───────────── Wasted spend: keywords table that flags zero-conversion spend ───────────── */

const KEYWORDS = [
  { k: "personal loan online", m: "Exact", spend: "₹48,210", conv: 214, qs: 8, share: 62 },
  { k: "instant loan app", m: "Phrase", spend: "₹31,940", conv: 0, qs: 4, share: 18 },
  { k: "loan for salaried", m: "Exact", spend: "₹22,580", conv: 96, qs: 7, share: 47 },
  { k: "free loan without documents", m: "Broad", spend: "₹17,305", conv: 0, qs: 3, share: 11 },
  { k: "low interest personal loan", m: "Phrase", spend: "₹14,870", conv: 41, qs: 6, share: 39 },
]

export function KeywordsMock() {
  const { ref, active } = useLoopInView<HTMLDivElement>()
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => setFlag((f) => !f), 2600)
    const first = setTimeout(() => setFlag(true), 900)
    return () => {
      clearInterval(t)
      clearTimeout(first)
    }
  }, [active])
  return (
    <div ref={ref}>
      <AppWindow title="app.adsassist.in / keywords">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold">Keywords</p>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-500",
              flag ? "bg-bad-soft text-bad" : "bg-mist text-ink-muted",
            )}
          >
            <AlertTriangle className="size-3" aria-hidden /> ₹49,245 spent with no conversion
          </span>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl border border-line">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 border-b border-line bg-mist px-3 py-2 text-[10px] font-semibold tracking-wide text-ink-muted uppercase">
            <span>Keyword</span>
            <span className="w-16 text-right">Spend</span>
            <span className="w-10 text-right">Conv.</span>
            <span className="hidden w-20 sm:block">Impr. share</span>
          </div>
          {KEYWORDS.map((r, i) => {
            const waste = r.conv === 0
            return (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className={cn(
                  "grid grid-cols-[1fr_auto_auto_auto] items-center gap-3 border-b border-line px-3 py-2 text-xs transition-colors duration-500 last:border-0",
                  waste && flag && "bg-bad-soft/70",
                )}
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium">{r.k}</span>
                  <span className="text-[10px] text-ink-muted">
                    {r.m} · QS {r.qs}/10
                  </span>
                </span>
                <span className="tabular w-16 text-right">{r.spend}</span>
                <span className={cn("tabular w-10 text-right font-semibold", waste ? "text-bad" : "text-good")}>{r.conv}</span>
                <span className="hidden w-20 items-center gap-1.5 sm:flex">
                  <span className="h-1.5 flex-1 rounded-full bg-mist">
                    <motion.span
                      className={cn("block h-1.5 rounded-full", r.share < 20 ? "bg-warn" : "bg-blue")}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.share}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.7 }}
                    />
                  </span>
                  <span className="tabular w-7 text-right text-[10px] text-ink-muted">{r.share < 10 ? "<10" : r.share}%</span>
                </span>
              </motion.div>
            )
          })}
        </div>
        <p className="mt-3 text-[11px] text-ink-muted">
          Lost to budget <span className="font-semibold text-ink">38%</span> · Lost to ad rank <span className="font-semibold text-ink">21%</span>
        </p>
      </AppWindow>
    </div>
  )
}

/* ───────────── Tracking: live event stream with click IDs ───────────── */

const EVENTS = [
  { type: "page_view", text: "/personal-loan", tag: "gclid · L1 Personal Loan", tone: "blue" },
  { type: "form_start", text: "Apply now form", tag: "gclid · L1 Personal Loan", tone: "blue" },
  { type: "field_capture", text: "phone +91 98•••••210", tag: "known visitor", tone: "ink" },
  { type: "page_view", text: "/home-loan", tag: "fbclid · Meta Lead Gen", tone: "meta" },
  { type: "form_abandon", text: "Left at step 2 of 3", tag: "fbclid · Meta Lead Gen", tone: "bad" },
  { type: "form_submit", text: "Lead created", tag: "gclid · L1 Personal Loan", tone: "good" },
  { type: "page_view", text: "/pricing (laptop)", tag: "same person · 2 devices", tone: "ink" },
] as const

const TONE: Record<string, string> = {
  blue: "bg-blue-soft text-blue",
  meta: "bg-violet-50 text-meta",
  good: "bg-good-soft text-good",
  bad: "bg-bad-soft text-bad",
  ink: "bg-mist text-ink-soft",
}

export function TrackingMock() {
  const { ref, active } = useLoopInView<HTMLDivElement>()
  const [n, setN] = useState(4)
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => setN((x) => x + 1), 1500)
    return () => clearInterval(t)
  }, [active])
  const rows = Array.from({ length: 4 }, (_, i) => ({ id: n - i, ...EVENTS[(n - i) % EVENTS.length] }))
  return (
    <div ref={ref}>
      <AppWindow title="app.adsassist.in / live">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Live website events</p>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-good">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-good" />
            </span>
            Live
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <AnimatePresence initial={false}>
            {rows.map((e) => (
              <motion.div
                key={e.id}
                layout
                initial={{ opacity: 0, y: -16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-xl border border-line bg-paper px-3 py-2.5"
              >
                <MousePointerClick className="size-4 shrink-0 text-ink-muted" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] font-semibold">{e.type}</p>
                  <p className="truncate text-xs text-ink-muted">{e.text}</p>
                </div>
                <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold", TONE[e.tone])}>{e.tag}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </AppWindow>
    </div>
  )
}

/* ───────────── Pipeline: a lead moves through stages, cost per stage updates ───────────── */

const STAGES = [
  { key: "lead", label: "Lead", cost: "₹224" },
  { key: "qualified", label: "Qualified", cost: "₹505" },
  { key: "application", label: "Application", cost: "₹963" },
  { key: "won", label: "Won", cost: "₹4,917" },
]

export function PipelineMock({ stages = STAGES }: { stages?: { key: string; label: string; cost: string }[] }) {
  const { ref, active } = useLoopInView<HTMLDivElement>()
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => setStep((s) => (s + 1) % (stages.length + 1)), 1500)
    return () => clearInterval(t)
  }, [active, stages.length])
  const at = Math.min(step, stages.length - 1)
  return (
    <div ref={ref}>
      <AppWindow title="app.adsassist.in / leads / Priya S.">
        <div className="flex items-center gap-3">
          <span className="bg-brand grid size-9 place-items-center rounded-full text-sm font-semibold text-white">PS</span>
          <div className="min-w-0">
            <p className="text-sm font-semibold">Priya S.</p>
            <p className="truncate text-[11px] text-ink-muted">Google Ads · L1 Personal Loan · keyword “personal loan online”</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stages.map((s, i) => {
            const done = i <= at
            return (
              <div key={s.key} className={cn("rounded-xl border p-2.5 transition-colors duration-500", done ? "border-blue/30 bg-blue-soft" : "border-line bg-paper")}>
                <p className="truncate text-[10px] font-semibold tracking-wide text-ink-muted uppercase">{s.label}</p>
                <div className="mt-2 h-8">
                  {i === at ? (
                    <motion.div layoutId="lead-card" className="bg-brand flex h-8 items-center justify-center rounded-lg text-[11px] font-semibold text-white shadow-md" transition={{ type: "spring", stiffness: 260, damping: 26 }}>
                      Priya
                    </motion.div>
                  ) : done ? (
                    <div className="grid h-8 place-items-center">
                      <Check className="size-4 text-blue" aria-hidden />
                    </div>
                  ) : null}
                </div>
                <p className="mt-2 text-[10px] text-ink-muted">Cost per {s.label.toLowerCase()}</p>
                <p className="tabular text-sm font-semibold">{s.cost}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-4 space-y-1.5 border-t border-line pt-3 text-[11px] text-ink-muted">
          {stages.slice(0, at + 1).map((s, i) => (
            <motion.p key={s.key} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-blue" />
              Moved to <span className="font-semibold text-ink">{s.label}</span> {i === 0 ? "by pixel" : i === stages.length - 1 ? "by CRM" : "by Rahul (sales)"}
            </motion.p>
          ))}
        </div>
      </AppWindow>
    </div>
  )
}

/* ───────────── Send results back: approved lead becomes a conversion on Google and Meta ───────────── */

export function SendBackMock() {
  const { ref, active } = useLoopInView<HTMLDivElement>()
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => setPhase((p) => (p + 1) % 4), 1300)
    return () => clearInterval(t)
  }, [active])
  return (
    <div ref={ref}>
      <AppWindow title="app.adsassist.in / conversions">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="rounded-xl border border-line p-3">
            <p className="text-[10px] font-semibold tracking-wide text-ink-muted uppercase">Lead stage</p>
            <p className="mt-1 text-sm font-semibold">Approved</p>
            <p className="mt-1 text-[10px] text-ink-muted">Hashed email + phone, click ID</p>
          </div>
          <div className="relative h-14 w-14 sm:w-20">
            <div className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-line-strong" />
            <motion.span
              className="bg-brand absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full"
              animate={active ? { left: ["0%", "100%"], opacity: [0, 1, 1, 0] } : { left: "50%" }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            />
            <ArrowRight className="absolute top-1/2 -right-1 size-4 -translate-y-1/2 text-ink-muted" aria-hidden />
          </div>
          <div className="space-y-2">
            {[
              { name: "Google Ads", sub: "Offline conversion", dot: "bg-blue", on: phase >= 1 },
              { name: "Meta", sub: "Conversions API", dot: "bg-meta", on: phase >= 2 },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 rounded-xl border border-line px-3 py-2">
                <span className={cn("size-2 rounded-full", p.dot)} />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold">{p.name}</p>
                  <p className="truncate text-[10px] text-ink-muted">{p.sub}</p>
                </div>
                <AnimatePresence>
                  {p.on ? (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="grid size-5 place-items-center rounded-full bg-good text-white">
                      <Check className="size-3" aria-hidden />
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-line text-[11px]">
          {[
            ["Approved", "Google Ads", "Sent", "text-good"],
            ["Approved", "Meta", "Sent", "text-good"],
            ["Won", "Google Ads", "Retrying", "text-warn"],
          ].map(([s, p, st, c], i) => (
            <div key={i} className="grid grid-cols-3 border-b border-line px-3 py-2 last:border-0">
              <span>{s}</span>
              <span className="text-ink-muted">{p}</span>
              <span className={cn("text-right font-semibold", c)}>{st}</span>
            </div>
          ))}
        </div>
      </AppWindow>
    </div>
  )
}

/* ───────────── Audiences: leads and abandoners gather into a synced audience ───────────── */

export function AudiencesMock() {
  const { ref, active } = useLoopInView<HTMLDivElement>()
  const dots = Array.from({ length: 18 }, (_, i) => i)
  return (
    <div ref={ref}>
      <AppWindow title="app.adsassist.in / audiences">
        <p className="text-sm font-semibold">Approved, not disbursed</p>
        <p className="text-[11px] text-ink-muted">Leads in stage Approved · last 30 days</p>
        <div className="relative mt-4 grid h-28 place-items-center rounded-xl bg-mist">
          {dots.map((i) => {
            const a = (i / dots.length) * Math.PI * 2
            return (
              <motion.span
                key={i}
                className={cn("absolute size-2.5 rounded-full", i % 3 === 0 ? "bg-meta" : "bg-blue")}
                initial={{ x: Math.cos(a) * 120, y: Math.sin(a) * 44, opacity: 0.5 }}
                animate={active ? { x: [Math.cos(a) * 120, Math.cos(a) * 26, Math.cos(a) * 120], y: [Math.sin(a) * 44, Math.sin(a) * 26, Math.sin(a) * 44], opacity: [0.5, 1, 0.5] } : undefined}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
              />
            )
          })}
          <span className="relative z-10 flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-xs font-semibold shadow-card">
            <Users className="size-3.5 text-blue" aria-hidden /> 1,284 people
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full bg-blue-soft px-2.5 py-1 font-semibold text-blue">Google Customer Match · synced</span>
          <span className="rounded-full bg-violet-50 px-2.5 py-1 font-semibold text-meta">Meta Custom Audience · synced</span>
        </div>
      </AppWindow>
    </div>
  )
}

/* ───────────── Insights and AI summary ───────────── */

const SUMMARY = "Spend rose 12% while leads rose 18%. L1 Personal Loan is your most efficient campaign. Two keywords spent ₹49,245 with no conversion."

export function InsightsMock() {
  const { ref, active, reduce } = useLoopInView<HTMLDivElement>()
  const [chars, setChars] = useState(reduce ? SUMMARY.length : 0)
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => setChars((c) => (c >= SUMMARY.length + 40 ? 0 : c + 2)), 45)
    return () => clearInterval(t)
  }, [active])
  return (
    <div ref={ref}>
      <AppWindow title="app.adsassist.in / insights">
        <div className="rounded-xl border border-blue/20 bg-blue-soft/60 p-3">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-blue">
            <Sparkles className="size-3.5" aria-hidden /> AI summary · this week
          </p>
          <p className="mt-2 min-h-[3.75rem] text-xs leading-relaxed text-ink-soft">
            {SUMMARY.slice(0, Math.min(chars, SUMMARY.length))}
            <span className="ml-0.5 inline-block h-3 w-px translate-y-0.5 animate-pulse bg-ink" />
          </p>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { icon: AlertTriangle, tone: "text-bad bg-bad-soft", t: "“Demand Gen – Broad” spent ₹18,400 with no leads", s: "Critical" },
            { icon: TrendingUp, tone: "text-warn bg-amber-50", t: "Cost per lead on Meta Lead Gen up 31%", s: "Warning" },
            { icon: Check, tone: "text-good bg-good-soft", t: "“L1 Personal Loan” is worth scaling", s: "Win" },
          ].map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="flex items-center gap-3 rounded-xl border border-line px-3 py-2"
            >
              <span className={cn("grid size-7 shrink-0 place-items-center rounded-lg", r.tone)}>
                <r.icon className="size-3.5" aria-hidden />
              </span>
              <p className="min-w-0 flex-1 truncate text-xs font-medium">{r.t}</p>
              <span className="text-[10px] text-ink-muted">{r.s}</span>
            </motion.div>
          ))}
        </div>
      </AppWindow>
    </div>
  )
}
