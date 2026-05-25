'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const themes = ['system', 'light', 'dark'] as const

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.5 2.5a7.5 7.5 0 1 0 8.2 11.8A6.5 6.5 0 1 1 14.5 2.5Z"
      />
    </svg>
  )
}

function SystemIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M8 20h8"
      />
    </svg>
  )
}

const labels: Record<(typeof themes)[number], string> = {
  system: 'System theme',
  light: 'Light theme',
  dark: 'Dark theme',
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 h-9 w-9 rounded-full border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-950/80" />
    )
  }

  const current = (theme ?? 'system') as (typeof themes)[number]
  const next = themes[(themes.indexOf(current) + 1) % themes.length]

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="fixed top-4 right-4 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 text-zinc-500 backdrop-blur transition hover:border-[#4d8293]/30 hover:text-[#4d8293] dark:border-zinc-800/80 dark:bg-zinc-950/80 dark:text-zinc-400 dark:hover:border-[#bde6ff]/30 dark:hover:text-[#bde6ff]"
      aria-label={`${labels[current]}. Switch to ${labels[next]}.`}
      title={labels[current]}
    >
      {current === 'light' && <SunIcon className="h-4 w-4" />}
      {current === 'dark' && <MoonIcon className="h-4 w-4" />}
      {current === 'system' && <SystemIcon className="h-4 w-4" />}
    </button>
  )
}
