"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Movie Poster Design",
    category: "Graphic Design",
    image: "/poster.jpg"
  },
  {
    title: "Brand Logo Design",
    category: "Brand Identity",
    image: "/logo.jpg"
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: "social.jpg"
  },
  {
    title: "Motion Graphics Video",
    category: "Motion Graphics",
    image: "motion.jpg"
  },
  {
    title: "Website Design",
    category: "Web Development",
    image: "/web.jpg"
  },
  {
    title: "Video Editing Project",
    category: "Video Production",
    image: "/video.jpg"
  }
]

export default function Portfolio() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-12">

      {/* Title */}
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-20">
        Our Work
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-yellow-400 text-sm mt-1">
                {project.category}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}