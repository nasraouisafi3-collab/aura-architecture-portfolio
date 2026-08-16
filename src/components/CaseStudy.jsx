import { ArrowUpRight, ArrowLeft } from "lucide-react";

const desktopScreens = [
  {
    src: "/portfolio/01-hero.png",
    alt: "AURA homepage",
    label: "Homepage",
  },
  {
    src: "/portfolio/02-selected-work.png",
    alt: "AURA selected work",
    label: "Selected Work",
  },
  {
    src: "/portfolio/03-studio.png",
    alt: "AURA studio section",
    label: "Studio",
  },
  {
    src: "/portfolio/04-services.png",
    alt: "AURA services section",
    label: "Services",
  },
  {
    src: "/portfolio/05-final-cta.png",
    alt: "AURA final CTA",
    label: "Final CTA",
  },
];

const mobileScreens = [
  {
    src: "/portfolio/06-mobile-hero.png",
    alt: "AURA mobile homepage",
    label: "Mobile Hero",
  },
  {
    src: "/portfolio/07-mobile-work.png",
    alt: "AURA mobile work section",
    label: "Mobile Work",
  },
  {
    src: "/portfolio/08-mobile-menu.png",
    alt: "AURA mobile menu",
    label: "Mobile Menu",
  },
];

function BrowserPreview({ image, className = "" }) {
  return (
    <div className={className}>
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          {image.label}
        </span>
        <span className="text-[11px] text-neutral-700">AURA</span>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-2 shadow-2xl">
        <div className="overflow-hidden rounded-lg bg-white">
          <img
            src={image.src}
            alt={image.alt}
            className="block w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function CaseStudy() {
  return (
    <main className="min-h-screen bg-[#141311]text-[#f4f1eb]">
      {/* Header */}
      <header className="px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to AURA
          </a>

          <span className="text-sm font-medium">AURA</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-24 pt-28 md:px-10 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Web Design · UI/UX · Frontend
          </p>

          <h1 className="text-7xl font-medium leading-[0.8] tracking-[-0.07em] md:text-[11rem]">
            AURA
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-neutral-800 pt-7 md:flex-row">
            <p className="max-w-xl text-lg leading-7 text-neutral-400">
              A premium digital experience created for a contemporary
              architecture and interior studio.
            </p>

            <div className="flex gap-10 text-sm">
              <div>
                <p className="text-neutral-600">Role</p>
                <p className="mt-1 text-neutral-300">Design + Frontend</p>
              </div>

              <div>
                <p className="text-neutral-600">Stack</p>
                <p className="mt-1 text-neutral-300">React / Vite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero screenshot */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <BrowserPreview image={desktopScreens[0]} />
        </div>
      </section>

      {/* Concept */}
      <section className="px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
            The concept
          </p>

          <h2 className="mt-7 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] md:text-6xl">
            An editorial-inspired experience where the architecture stays at
            the center.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-500">
            Strong typography, generous whitespace, immersive photography and
            restrained interactions create a premium studio presence without
            relying on a generic template.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <BrowserPreview image={desktopScreens[1]} />
        </div>
      </section>

      {/* Two screens */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-2">
          <BrowserPreview image={desktopScreens[2]} />
          <BrowserPreview image={desktopScreens[3]} />
        </div>
      </section>

      {/* Mobile */}
      <section className="border-t border-neutral-800 px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
              Responsive design
            </p>

            <h2 className="mt-7 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">
              The same visual identity, built for smaller screens.
            </h2>

            <p className="mt-6 max-w-2xl text-neutral-500">
              The layout adapts naturally across mobile while keeping the
              photography, typography and navigation clear.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {mobileScreens.map((image) => (
              <div key={image.src}>
                <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  {image.label}
                </div>

                <div className="mx-auto max-w-[340px] overflow-hidden rounded-[28px] border border-neutral-800 bg-neutral-950 p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[22px] bg-white">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA screenshot */}
      <section className="px-4 pb-28 md:px-8 md:pb-36">
        <div className="mx-auto max-w-[1500px]">
          <BrowserPreview image={desktopScreens[4]} />
        </div>
      </section>

      {/* Result */}
      <section className="border-t border-neutral-800 px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
            The result
          </p>

          <h2 className="mt-7 max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
            A clean, responsive website designed to make the studio's work
            impossible to overlook.
          </h2>

          <a
            href="https://aura-architecture-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#f4f1eb] px-7 py-4 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-1"
          >
            Visit live website
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}

export default CaseStudy;