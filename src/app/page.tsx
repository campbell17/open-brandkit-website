import { BrandLogo } from '@/components/brand-logo'
import { CopyCommand } from '@/components/copy-command'

const features = [
  {
    title: 'Logos, organized',
    body: 'Full logos, wordmarks, and icons in clear sections — each with a download button.',
    span: 'col-span-1 row-span-1',
    accent: 'from-[#4d8293]/25 to-[#4d8293]/5',
  },
  {
    title: 'Your color palette',
    body: 'Point at a color file and get clean swatch cards your team and partners can actually use.',
    span: 'col-span-1 row-span-1',
    accent: 'from-[#e85454]/25 to-[#e85454]/5',
  },
  {
    title: 'Favicons & social images',
    body: 'Generate favicons and banner images from the icon files you already have.',
    span: 'col-span-1 row-span-2 md:col-span-1',
    accent: 'from-[#914d84]/25 to-[#914d84]/5',
  },
  {
    title: 'Always current',
    body: 'Update your brand files, rebuild, and the live page matches what you ship. No stale attachments.',
    span: 'col-span-1 row-span-1',
    accent: 'from-[#bde6ff]/50 to-[#bde6ff]/10',
  },
  {
    title: 'Fits your site',
    body: 'Built for Next.js and Tailwind, so the page looks like it belongs — not bolted on afterward.',
    span: 'col-span-1 row-span-1',
    accent: 'from-[#4d8293]/20 to-[#e85454]/10',
  },
]

const lovedByLogos = [
  {
    name: 'Angry Mallards',
    src: '/images/brands/angry-mallards.svg',
    darkSrc: '/images/brands/angry-mallards-white.svg',
    className: 'h-11 w-auto',
  },
  {
    name: 'Sequel',
    src: '/images/brands/sequel.svg',
    darkSrc: '/images/brands/sequel-white.svg',
    className: 'h-10 w-auto',
  },
  {
    name: 'Tim Campbell Works',
    src: '/images/brands/tim-campbell-works.svg',
    darkSrc: '/images/brands/tim-campbell-works-white.svg',
    className: 'h-11 w-auto',
  },
  {
    name: 'Clairvoyint',
    src: '/images/brands/clairvoyint.svg',
    darkSrc: '/images/brands/clairvoyint-onblack.svg',
    className: 'h-10 w-auto',
  },
  {
    name: "Padiano's Kitchen",
    src: '/images/brands/padianos-kitchen.svg',
    className: 'h-12 w-auto dark:brightness-0 dark:invert',
  },
  {
    name: 'EvenTide Outfitters',
    src: '/images/brands/eventide-outfitters.svg',
    darkSrc: '/images/brands/eventide-outfitters-white.svg',
    className: 'h-12 w-auto',
  },
]

function LovedByLogo({
  name,
  src,
  darkSrc,
  className,
}: {
  name: string
  src: string
  darkSrc?: string
  className: string
}) {
  return (
    <li className="flex shrink-0 items-center justify-center">
      <BrandLogo
        lightSrc={src}
        darkSrc={darkSrc}
        alt={name}
        className={`${className} opacity-90 transition hover:opacity-100`}
      />
    </li>
  )
}

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 bg-hero-glow opacity-80 dark:opacity-60 sm:w-[90rem]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 pr-16 lg:px-8 lg:pr-20">
        <a href="/" className="inline-flex items-center">
          <BrandLogo
            lightSrc="/logos/open-brandkit-logo.svg"
            darkSrc="/logos/open-brandkit-logo-white.svg"
            alt="Open BrandKit"
            className="h-8 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
          <a
            href="#features"
            className="transition hover:text-[#4d8293] dark:hover:text-[#bde6ff]"
          >
            Features
          </a>
          <a
            href="#install"
            className="transition hover:text-[#4d8293] dark:hover:text-[#bde6ff]"
          >
            Install
          </a>
          <a
            href="https://github.com/campbell17/open-brandkit"
            className="transition hover:text-[#4d8293] dark:hover:text-[#bde6ff]"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <section className="pb-16 pt-10 text-center md:pb-20 md:pt-16">
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
            Got a logo? Get{' '}
            <span className="text-brand-gradient">BrandKit</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-400">
            Open BrandKit gives you one clean page on your site where the team
            can get what they need when they need it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#install"
              className="rounded-lg bg-[#4d8293] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3f6d7b]"
            >
              Get started
            </a>
            <a
              href="https://www.npmjs.com/package/open-brandkit"
              className="rounded-lg border border-[#4d8293]/30 px-5 py-3 text-sm font-semibold text-[#4d8293] transition hover:border-[#4d8293]/60 hover:bg-[#4d8293]/5 dark:border-[#bde6ff]/30 dark:text-[#bde6ff] dark:hover:border-[#bde6ff]/60 dark:hover:bg-[#bde6ff]/5"
            >
              View on npm
            </a>
          </div>

          <div className="mx-auto mt-14 max-w-6xl md:mt-16">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/80 p-2 shadow-xl shadow-zinc-900/5 ring-1 ring-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-[#4d8293]/20 dark:ring-white/5">
              <div className="overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Open BrandKit demo"
                >
                  <source src="/demo/open-brandkit.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 px-4 text-center sm:px-6 lg:px-10">
              <div className="mx-auto w-full max-w-[88rem]">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Loved by:
                </p>
                <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-10 lg:gap-x-12">
                  {lovedByLogos.map((logo) => (
                    <LovedByLogo key={logo.name} {...logo} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="install" className="flex flex-col gap-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-[#4d8293]/15">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Install
            </p>
            <CopyCommand
              command="npx open-brandkit init --install --build"
              label="install command"
            />
            <p className="mt-4 text-sm text-zinc-500">
              Run this from your Next.js project folder. When it&apos;s done,
              visit{' '}
              <code className="text-zinc-700 dark:text-zinc-300">/brandkit</code>{' '}
              on your site to see the page.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-[#4d8293]/15">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Rebuild
            </p>
            <CopyCommand
              command="npm run brandkit:build"
              label="rebuild command"
            />
            <p className="mt-4 text-sm text-zinc-500">
              When you change logos or colors, rebuild the brand kit so the live
              page stays current.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-[#4d8293]/15">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Upgrade
            </p>
            <CopyCommand
              command={`npm install open-brandkit@latest\nnpm run brandkit:build`}
              label="upgrade command"
            />
            <p className="mt-4 text-sm text-zinc-500">
              Install a newer package release, then rebuild. Pin{' '}
              <code className="text-zinc-700 dark:text-zinc-300">
                open-brandkit@alpha
              </code>{' '}
              if you want the alpha dist-tag.
            </p>
          </div>
        </section>

        <section id="features" className="mt-20 md:mt-28">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            What a good brand page should do
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            No PDF lost in email. No guessing which logo is current. Just one
            page, tied to the files you actually use.
          </p>
          <div className="mt-10 grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/60 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 ${feature.span}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 transition group-hover:opacity-100 ${feature.accent}`}
                />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {feature.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-panel mt-20 rounded-3xl border border-zinc-200 px-8 py-14 text-center dark:border-zinc-800 md:mt-28">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Stop emailing zip files.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            Put your brand files in the project, run one command, and send
            people a link that stays up to date.
          </p>
          <a
            href="https://github.com/campbell17/open-brandkit"
            className="mt-8 inline-flex rounded-lg bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Explore the project
          </a>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800/80">
        <div className="flex flex-col items-center gap-3">
          <BrandLogo
            lightSrc="/logos/open-brandkit-icon.svg"
            darkSrc="/logos/open-brandkit-icon-white.svg"
            alt="Open BrandKit"
            className="h-11 w-auto opacity-80"
          />
          <p className="text-sm text-zinc-500">Open BrandKit</p>
        </div>
      </footer>
    </div>
  )
}
