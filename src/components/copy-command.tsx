'use client'

import { useState } from 'react'

function CopyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        width="14"
        height="14"
        x="8"
        y="8"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CopyCommand({
  command,
  label,
}: {
  command: string
  label: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="relative mt-3">
      <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-white/80 py-3 pl-4 pr-12 font-mono text-sm leading-7 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100">
        <code>{command}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 transition hover:bg-[#4d8293]/10 hover:text-[#4d8293] dark:text-zinc-400 dark:hover:bg-[#bde6ff]/10 dark:hover:text-[#bde6ff]"
        aria-label={copied ? 'Copied' : `Copy ${label}`}
        title={copied ? 'Copied' : 'Copy command'}
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-[#4d8293] dark:text-[#bde6ff]" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}
