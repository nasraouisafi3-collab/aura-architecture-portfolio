import { motion } from "framer-motion";

const stats = [
  { value: "18", label: "Projects completed" },
  { value: "09", label: "Countries reached" },
  { value: "12", label: "Years of experience" },
];

function Studio() {
  return (
    <section
      id="studio"
      className="bg-neutral-950 px-6 py-28 text-white md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.6fr] md:gap-24">
          <div>
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              The studio
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-7xl"
            >
              We believe great architecture isn't about creating more.
              <span className="text-neutral-500"> It's about creating better.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-md text-base leading-7 text-neutral-400">
              AURA is an independent architecture and interior studio focused
              on creating spaces that feel natural, considered and deeply
              connected to the people who inhabit them.
            </p>

            <a
              href="#contact"
              className="mt-8 w-fit border-b border-neutral-600 pb-2 text-sm text-white transition-colors hover:border-white"
            >
              Discover the studio →
            </a>
          </div>
        </div>

        <div className="mt-24 grid border-t border-neutral-800 md:mt-32 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-neutral-800 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0"
            >
              <p className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                {stat.value}
              </p>

              <p className="mt-3 text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Studio;