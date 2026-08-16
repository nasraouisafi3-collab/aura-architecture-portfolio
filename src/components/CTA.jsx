import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section
      id="contact"
      className="bg-neutral-950 px-6 py-28 text-white md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="border-t border-neutral-800 pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Start a project
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 max-w-6xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-8xl"
          >
            Let's create a space
            <br />
            <span className="text-neutral-500">worth remembering.</span>
          </motion.h2>

          <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-7 text-neutral-400">
              Have a project in mind? Tell us about it and let's start a
              conversation.
            </p>

            <a
              href="mailto:hello@aura-studio.example"
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-neutral-950 transition-transform duration-300 hover:-translate-y-1"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;