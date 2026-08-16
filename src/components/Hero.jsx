import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f3ef] px-6 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1400px] flex-col justify-between pb-8">
        
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500"
          >
            Architecture & Interior Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-6xl text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-neutral-950"
          >
            Architecture
            <br />
            that makes space
            <br />
            <span className="text-neutral-400">feel alive.</span>
          </motion.h1>
        </div>

        <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md text-base leading-7 text-neutral-600 md:text-lg"
          >
            We create thoughtful spaces where material, light and human
            experience come together.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            href="#work"
            className="group flex w-fit items-center gap-3 border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900"
          >
            Explore our work
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400"
        >
          <ArrowDown size={14} />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;