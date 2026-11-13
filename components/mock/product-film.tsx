"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Check, Pause, Play } from "lucide-react"
import { cn } from "@/lib/cn"
import { DashboardMock } from "./dashboard-mock"
import { KeywordsMock, PipelineMock, SendBackMock } from "./feature-mocks"
import { AppWindow, useLoopInView } from "./shared"

const SCENE_MS = 5200

function ConnectScene() {
  const accounts = [
    { name: "Google Ads · Personal Loans", dot: "bg-blue" },
    { name: "Google Ads · Home Loans (MCC)", dot: "bg-blue" },
    { name: "Meta · Lead Gen India", dot: "bg-meta" },
  ]
  return (
    <AppWindow title="app.adsassist.in / integrations">
      <p className="text-sm font-semibold">Connect your ad accounts</p>
      <p className="text-[11px] text-ink-muted">Official Google and Meta sign-in. Read-only reporting.</p>
      <div className="mt-4 space-y-2">
        {accounts.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.35 }}
            className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5"
          >
            <span className={cn("size-2.5 rounded-full", a.dot)} />
            <span className="flex-1 truncate text-xs font-medium">{a.name}</span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.35, type: "spring", stiffness: 400, damping: 20 }}
              className="grid size-5 place-items-center rounded-full bg-good text-white"
            >
              <Check className="size-3" aria-hidden />
            </motion.span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-[11px] text-ink-muted">
          <span>Loading your last 30 days</span>
          <span>Campaigns, ad sets, ads, keywords</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-mist">
          <motion.div className="bg-brand h-2 rounded-full" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3.6, delay: 1.2, ease: "easeInOut" }} />
        </div>
      </div>
    </AppWindow>
  )
}

const SCENES = [
  { key: "connect", label: "Connect", caption: "Sign in with Google and Meta. Your last 30 days load right away.", render: () => <ConnectScene /> },
  { key: "dashboard", label: "Dashboard", caption: "Spend, leads and cost per lead across every account, updated every 15 minutes.", render: () => <DashboardMock compact /> },
  { key: "keywords", label: "Wasted spend", caption: "Keywords that spend without converting get flagged automatically.", render: () => <KeywordsMock /> },
  { key: "pipeline", label: "Pipeline", caption: "Every lead followed from the ad click to the sale.", render: () => <PipelineMock /> },
  { key: "sendback", label: "Send back", caption: "Approvals go back to Google and Meta so bidding finds more customers.", render: () => <SendBackMock /> },
]

/**
 * The hero "film": product scenes that play in sequence like a video, with chapters and a progress bar.
 * It pauses off screen, on hover, and for people who prefer reduced motion.
 */
export function ProductFilm() {
  const { ref, active, reduce } = useLoopInView<HTMLDivElement>()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const last = useRef<number | null>(null)
  const elapsedRef = useRef(0)
  const playing = active && !paused && !hover && !reduce

  useEffect(() => {
    if (!playing) {
      last.current = null
      return
    }
    let raf = 0
    const tick = (now: number) => {
      const dt = last.current === null ? 0 : now - last.current
      last.current = now
      elapsedRef.current += dt
      if (elapsedRef.current >= SCENE_MS) {
        elapsedRef.current = 0
        setIndex((i) => (i + 1) % SCENES.length)
      }
      setElapsed(elapsedRef.current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  const go = (i: number) => {
    elapsedRef.current = 0
    setIndex(i)
    setElapsed(0)
  }
  const scene = SCENES[index]

  return (
    <div ref={ref} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="relative">
      <div className="relative min-h-[23rem] sm:min-h-[25rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.key}
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.985 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {scene.render()}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <button
          onClick={() => setPaused((p) => !p)}
          className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink-soft shadow-card transition-colors hover:text-ink"
          aria-label={paused ? "Play product tour" : "Pause product tour"}
        >
          {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex gap-1.5" role="tablist" aria-label="Product tour chapters">
            {SCENES.map((s, i) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={i === index}
                onClick={() => go(i)}
                className="group flex-1 text-left"
              >
                <span className="block h-1 overflow-hidden rounded-full bg-line">
                  <span
                    className="bg-brand block h-1 rounded-full"
                    style={{ width: i < index ? "100%" : i === index ? `${(elapsed / SCENE_MS) * 100}%` : "0%" }}
                  />
                </span>
                <span className={cn("mt-1.5 hidden truncate text-[11px] font-semibold sm:block", i === index ? "text-ink" : "text-ink-muted group-hover:text-ink-soft")}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={scene.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-2 text-sm text-ink-soft"
            >
              {scene.caption}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
