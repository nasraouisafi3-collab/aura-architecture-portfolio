import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 pb-8 text-white md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 border-t border-neutral-800 pt-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold tracking-[-0.04em]">
              AURA
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
              Architecture and interiors shaped around people, materials and
              light.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-neutral-400">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#studio" className="transition hover:text-white">
              Studio
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <div className="md:text-right">
            <a
              href="mailto:hello@aura-studio.example"
              className="group inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
            >
              hello@aura-studio.example
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-neutral-800 pt-6 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AURA Studio. Concept project.</p>
          <p>Architecture · Interiors · Creative Direction</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;