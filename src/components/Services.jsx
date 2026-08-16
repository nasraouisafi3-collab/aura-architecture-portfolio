import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Residential and commercial spaces designed around how people live, work and move.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Material, lighting and details brought together into cohesive environments.",
  },
  {
    number: "03",
    title: "Renovation",
    description:
      "Existing spaces reimagined with a new identity, purpose and sense of place.",
  },
  {
    number: "04",
    title: "Creative Direction",
    description:
      "A complete visual direction connecting architecture, interiors and brand.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#f5f3ef] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 md:mb-24">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            What we do
          </p>

          <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-neutral-950 md:text-7xl">
            From first idea
            <br />
            to final detail.
          </h2>
        </div>

        <div className="border-t border-neutral-300">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group grid gap-6 border-b border-neutral-300 py-8 md:grid-cols-[80px_1fr_1fr_40px] md:items-start md:py-10"
            >
              <span className="text-xs text-neutral-400">
                {service.number}
              </span>

              <h3 className="text-2xl font-medium tracking-tight text-neutral-950 md:text-4xl">
                {service.title}
              </h3>

              <p className="max-w-md text-sm leading-6 text-neutral-500 md:text-base">
                {service.description}
              </p>

              <ArrowUpRight
                size={20}
                className="hidden text-neutral-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;