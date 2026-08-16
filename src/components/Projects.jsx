import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Casa Alba",
    category: "Residential",
    location: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Nørd House",
    category: "Residential",
    location: "Copenhagen",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Atelier 27",
    category: "Commercial",
    location: "Paris",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
  },
];

function Projects() {
  return (
    <section id="work" className="bg-[#f5f3ef] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Selected work
            </p>

            <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-neutral-950 md:text-7xl">
              Spaces designed
              <br />
              with intention.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-neutral-500">
            A selection of residential and commercial spaces shaped around
            material, light and everyday life.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-x-8 md:gap-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={index === 2 ? "md:col-span-2 md:w-[70%]" : ""}
            >
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 md:aspect-[5/6]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-neutral-950 md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      {project.category} · {project.location}
                    </p>
                  </div>

                  <span className="text-xs text-neutral-400">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;