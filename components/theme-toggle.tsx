"use client"

import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/cn"

export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark")
    try {
      localStorage.setItem("theme", dark ? "dark" : "light")
    } catch {}
  }

  // Both icons render; CSS picks one, so server and client markup always match.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn("grid size-9 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-mist hover:text-ink", className)}
    >
      <Moon className="size-4.5 dark:hidden" aria-hidden />
      <Sun className="hidden size-4.5 dark:block" aria-hidden />
    </button>
  )
}
