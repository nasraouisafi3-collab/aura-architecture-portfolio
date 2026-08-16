import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-all duration-500 md:px-8 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 transition-all duration-500 ${
          scrolled
            ? "border border-neutral-200/70 bg-white/80 py-3 shadow-sm backdrop-blur-xl"
            : "py-1"
        }`}
      >
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-[-0.04em] text-neutral-900"
        >
          AURA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
          >
            Work
          </a>

          <a
            href="#studio"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
          >
            Studio
          </a>

          <a
            href="#services"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
          >
            Services
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-700"
          >
            Start a project
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 items-center justify-center rounded-full bg-neutral-900 px-4 text-xs text-white md:hidden"
        >
          {open ? <X size={18} /> : "Menu"}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-[72px] rounded-2xl bg-neutral-950 p-6 text-white shadow-2xl md:hidden">
          <div className="flex flex-col">
            <a
              href="#work"
              onClick={closeMenu}
              className="border-b border-neutral-800 py-5 text-2xl tracking-tight"
            >
              Work
            </a>

            <a
              href="#studio"
              onClick={closeMenu}
              className="border-b border-neutral-800 py-5 text-2xl tracking-tight"
            >
              Studio
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-neutral-800 py-5 text-2xl tracking-tight"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-6 flex items-center justify-between rounded-full bg-white px-5 py-4 text-sm font-medium text-neutral-950"
            >
              Start a project
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;