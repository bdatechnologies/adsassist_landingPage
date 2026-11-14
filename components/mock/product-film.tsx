"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Check, Pause, Play } from "lucide-react"
import { cn } from "@/lib/cn"
import { DashboardMock } from "./dashboard-mock"
import { KeywordsMock, PipelineMock, SendBackMock } from "./feature-mocks"
import { AppWindow, LoopPausedContext, useLoopInView } from "./shared"

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

// `label` is not shown on screen; it only names each progress bar for screen readers.
const SCENES = [
  { key: "connect", label: "Connect", render: () => <ConnectScene /> },
  { key: "dashboard", label: "Dashboard", render: () => <DashboardMock compact /> },
  { key: "keywords", label: "Wasted spend", render: () => <KeywordsMock /> },
  { key: "pipeline", label: "Pipeline", render: () => <PipelineMock /> },
  { key: "sendback", label: "Send back", render: () => <SendBackMock /> },
]

/**
 * The hero "film": product scenes that play in sequence like a video, with a progress bar per scene.
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
      {/*
        Every scene sits in the same grid cell. The inactive copies are invisible and paused; they only
        reserve space, so the frame is always as tall as the tallest scene and the controls below never move.
      */}
      <div className="relative grid grid-cols-[minmax(0,1fr)] *:[grid-area:1/1]">
        {SCENES.map((s) => (
          <div key={s.key} className="invisible" aria-hidden inert>
            <LoopPausedContext value={true}>{s.render()}</LoopPausedContext>
          </div>
        ))}
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

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => setPaused((p) => !p)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink-soft shadow-card transition-colors hover:text-ink sm:size-9"
          aria-label={paused ? "Play product tour" : "Pause product tour"}
        >
          {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
        </button>
        <div className="flex min-w-0 flex-1 gap-1.5" role="tablist" aria-label="Product tour chapters">
          {SCENES.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === index}
              aria-label={s.label}
              onClick={() => go(i)}
              // The bar is 4px tall; the padding gives it a comfortable tap area (44px on phones).
              className="group flex-1 cursor-pointer py-5 sm:py-3"
            >
              <span className="block h-1 overflow-hidden rounded-full bg-line transition-colors group-hover:bg-line-strong">
                <span
                  className="bg-brand block h-1 rounded-full"
                  style={{ width: i < index ? "100%" : i === index ? `${(elapsed / SCENE_MS) * 100}%` : "0%" }}
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
