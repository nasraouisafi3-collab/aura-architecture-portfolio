import { motion } from "framer-motion";

function FeaturedImage() {
  return (
    <section className="bg-[#f5f3ef] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1 }}
          className="group relative h-[55vh] min-h-[420px] overflow-hidden md:h-[75vh]"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
            alt="Modern architectural interior"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
            <p className="mb-2 text-xs uppercase tracking-[0.2em]">
              Featured Project
            </p>
            <p className="text-xl font-medium tracking-tight md:text-3xl">
              Casa Alba
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedImage;