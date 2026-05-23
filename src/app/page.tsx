const features = [
  {
    title: 'Logos & lockups',
    body: 'Grouped sections for full logos, wordmarks, and icons with one-click downloads.',
    span: 'col-span-1 row-span-1',
    accent: 'from-violet-500/20 to-fuchsia-500/5',
  },
  {
    title: 'Brand colors',
    body: 'Cards pulled from Markdown, JSON, or CSV — primary and secondary palettes included.',
    span: 'col-span-1 row-span-1',
    accent: 'from-cyan-500/20 to-blue-500/5',
  },
  {
    title: 'Favicons & banners',
    body: 'Generate favicons and social images from the icon files you already ship.',
    span: 'col-span-1 row-span-2 md:col-span-1',
    accent: 'from-amber-500/20 to-orange-500/5',
  },
  {
    title: 'Repo-native',
    body: 'Rebuild when assets change. The live page always matches what is in git.',
    span: 'col-span-1 row-span-1',
    accent: 'from-emerald-500/20 to-teal-500/5',
  },
  {
    title: 'Tailwind-first',
    body: 'The installer wires scan paths for Tailwind 3 and 4 so styles compile on day one.',
    span: 'col-span-1 row-span-1',
    accent: 'from-rose-500/20 to-pink-500/5',
  },
]

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-violet-600 to-cyan-400 opacity-20 sm:w-[90rem]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 font-mono text-sm font-bold text-zinc-950">
            OB
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Open BrandKit
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#install" className="hover:text-white">
            Install
          </a>
          <a
            href="https://github.com/campbell17/open-brandkit"
            className="hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <section className="pb-16 pt-10 text-center md:pb-20 md:pt-16">
          <p className="mx-auto mb-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
            Early alpha · npm installable
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Brand assets deserve{' '}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              one honest page
            </span>
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Open BrandKit turns the logos, colors, and icons in your repo into a
            polished <code className="font-mono text-cyan-300">/brandkit</code>{' '}
            route — shareable, downloadable, and always in sync with what you
            ship.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#install"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Get started
            </a>
            <a
              href="https://www.npmjs.com/package/open-brandkit"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              View on npm
            </a>
          </div>

          <div className="mx-auto mt-14 max-w-5xl md:mt-16">
            <p className="mb-4 text-sm font-medium text-zinc-500">
              Quick demo
            </p>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 p-2 shadow-2xl shadow-violet-950/40 ring-1 ring-white/5">
              <div className="overflow-hidden rounded-xl bg-zinc-950">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="Open BrandKit demo placeholder"
                >
                  <source src="/demo/workload-toolbar.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-600">
              Placeholder footage — swap for a real /brandkit walkthrough later.
            </p>
          </div>
        </section>

        <section
          id="install"
          className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-violet-950/30 backdrop-blur sm:p-8"
        >
          <p className="text-sm font-medium text-zinc-400">Install</p>
          <pre className="mt-3 overflow-x-auto font-mono text-sm leading-7 text-zinc-100">
            <code>{`npx open-brandkit init --install --build`}</code>
          </pre>
          <p className="mt-4 text-sm text-zinc-500">
            From the root of an existing Next.js App Router project. Then open{' '}
            <code className="text-zinc-300">/brandkit</code>.
          </p>
        </section>

        <section id="features" className="mt-20 md:mt-28">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything a brand kit page should do
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            No more stale PDFs or scattered Drive folders. One generated page,
            tied to the files you actually deploy.
          </p>
          <div className="mt-10 grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 ${feature.span}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 transition group-hover:opacity-100 ${feature.accent}`}
                />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {feature.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-zinc-800 bg-gradient-to-br from-violet-950/50 via-zinc-900 to-zinc-950 px-8 py-14 text-center md:mt-28">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Stop emailing zip files.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Put approved brand files in your repo, run the installer, and give
            partners a URL that stays current.
          </p>
          <a
            href="https://github.com/campbell17/open-brandkit"
            className="mt-8 inline-flex rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
          >
            Explore the project
          </a>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-500">
        Open BrandKit
      </footer>
    </div>
  )
}
