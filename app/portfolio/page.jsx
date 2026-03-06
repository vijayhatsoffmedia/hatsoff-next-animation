"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const capabilities = [
  "Branding",
  "Graphic Design",
  "Motion Graphics",
  "Video Editing",
  "Web Development",
  "Digital Marketing",
]

const projects = [
  { title: "Poster Design", image: "/Poster.jpg", category: "Design" },
  { title: "Motion Reel", image: "/motion.jpg", category: "Motion" },
  { title: "Video Campaign", image: "/video.jpg", category: "Video" },
  { title: "Website Project", image: "/web.jpg", category: "Web" },
  { title: "Social Campaign", image: "/social.jpg", category: "Marketing" },
]

export default function PortfolioPage() {
  const [preview, setPreview] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY })
  }

  const { scrollY } = useScroll()
  const parallax = useTransform(scrollY, [0, 800], [0, -200])

  return (
    <main
      onMouseMove={handleMove}
      className="bg-black text-white pt-[90px] overflow-hidden relative"
    >

      {/* Cursor Preview */}
      {preview && (
        <motion.div
          animate={{ x: cursor.x + 20, y: cursor.y + 20 }}
          className="fixed pointer-events-none w-56 h-36 z-50"
        >
          <Image
            src={preview}
            alt="preview"
            width={300}
            height={200}
            className="rounded-xl object-cover"
          />
        </motion.div>
      )}

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-bold"
        >
          Creative Work
        </motion.h1>

        <p className="text-gray-400 mt-8 max-w-xl">
          A curated selection of branding, design, motion graphics,
          and digital storytelling projects.
        </p>

      </section>

      {/* CAPABILITIES MARQUEE */}
      <section className="py-20 overflow-hidden border-y border-gray-800">

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-24 text-4xl font-semibold whitespace-nowrap"
        >
          {capabilities.map((cap, i) => (
            <span key={i} className="text-yellow-400">
              {cap}
            </span>
          ))}
          {capabilities.map((cap, i) => (
            <span key={i + 10} className="text-yellow-400">
              {cap}
            </span>
          ))}
        </motion.div>

      </section>

      {/* FEATURED PROJECTS */}
      {projects.slice(0, 3).map((p, i) => (
        <section key={i} className="py-32 px-6 md:px-12">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">{p.title}</h2>
              <p className="text-yellow-400 mb-3">{p.category}</p>

              <p className="text-gray-400">
                This project demonstrates our creative approach
                combining visual storytelling with modern design.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={p.image}
                alt={p.title}
                width={800}
                height={500}
                className="object-cover w-full h-[420px]"
              />
            </motion.div>

          </div>

        </section>
      ))}

      {/* INTERACTIVE EXPLORER */}
      <section className="py-32 px-6 md:px-12">

        <h2 className="text-5xl font-bold mb-20 text-center">
          Explore Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setPreview(p.image)}
              onMouseLeave={() => setPreview(null)}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="bg-[#111] p-10 rounded-xl border border-gray-800"
            >

              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-yellow-400 text-sm">
                {p.category}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* PARALLAX STATEMENT */}
      <section className="py-40 text-center overflow-hidden">

        <motion.h2
          style={{ y: parallax }}
          className="text-7xl md:text-9xl font-bold"
        >
          Design × Motion × Story
        </motion.h2>

      </section>

    </main>
  )
}