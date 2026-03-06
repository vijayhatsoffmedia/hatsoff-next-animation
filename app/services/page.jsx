"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Graphic Design",
    desc: "Creative visual design solutions that help brands stand out with strong identity and storytelling.",
    items: [
      "Brand Identity",
      "Logo Design",
      "Movie Poster Designing",
      "Social Media Creatives",
      "Comics Lettering & Editing"
    ]
  },
  {
    title: "Video Production",
    desc: "Professional cinematic videos and editing that bring your brand story to life.",
    items: [
      "Video Editing",
      "Motion Graphics",
      "Animations",
      "AI Video Creation",
      "Video & Photo Shoots"
    ]
  },
  {
    title: "Web Development",
    desc: "Modern, high-performance websites designed to convert visitors into customers.",
    items: [
      "Business Websites",
      "Portfolio Websites",
      "Landing Pages",
      "SEO Optimization",
      "Performance Optimization"
    ]
  },
  {
    title: "Digital Marketing",
    desc: "Strategic marketing solutions that grow your brand and increase online visibility.",
    items: [
      "Social Media Management",
      "Content Strategy",
      "SEO",
      "Brand Campaigns",
      "Advertising Strategy"
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-black text-white pt-[90px]">

      {/* HERO */}
      <section className="py-32 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Hatsoff Media provides creative solutions including design,
          motion graphics, video production and digital marketing
          to help brands grow in the digital world.
        </motion.p>

      </section>


      {/* SERVICES GRID */}
      <section className="pb-32 px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-xl p-10"
            >

              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                {service.title}
              </h2>

              <p className="text-gray-400 mb-6">
                {service.desc}
              </p>

              <ul className="space-y-2 text-gray-300">
                {service.items.map((item, i) => (
                  <li key={i}>
                    • {item}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="py-32 text-center px-6 border-t border-gray-800">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ready to Start Your Project?
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Let’s create something amazing together.
        </p>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Contact Us
        </button>

      </section>

    </main>
  )
}