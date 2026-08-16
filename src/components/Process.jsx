import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the space, the people and the ideas behind the project.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn those ideas into a clear architectural direction and experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We work through every detail to transform the vision into reality.",
  },
];

function Process() {
  return (
    <section className="bg-white px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Our process
          </p>

          <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-neutral-950 md:text-7xl">
            Simple thinking.
            <br />
            Thoughtful execution.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="border-t border-neutral-300 pt-6"
            >
              <span className="text-xs text-neutral-400">
                {step.number}
              </span>

              <h3 className="mt-12 text-3xl font-medium tracking-tight text-neutral-950 md:text-4xl">
                {step.title}
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500 md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;