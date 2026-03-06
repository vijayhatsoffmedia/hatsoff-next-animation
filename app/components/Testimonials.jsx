"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Startup Founder",
    review:
      "Hatsoff Media completely transformed our brand identity. The design and motion graphics work exceeded our expectations."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    review:
      "Their video editing and motion graphics helped our campaign stand out. Engagement increased dramatically."
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    review:
      "The website and digital marketing strategy they created for us helped our business grow online."
  }
]

export default function Testimonials() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-black text-white py-40 px-6 md:px-12 overflow-hidden">

      <h2 className="text-4xl md:text-7xl font-bold text-center mb-24">
        Client Voices
      </h2>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Quote symbol */}
        <div className="text-yellow-400 text-6xl mb-10">
          "
        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10">
              {testimonials[index].review}
            </p>

            <h4 className="text-xl font-semibold">
              {testimonials[index].name}
            </h4>

            <p className="text-gray-500 text-sm">
              {testimonials[index].role}
            </p>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* Floating decorative cards */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden md:block absolute left-20 top-40 bg-[#111] p-6 rounded-xl border border-gray-800"
      >
        ⭐⭐⭐⭐⭐
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden md:block absolute right-20 bottom-40 bg-[#111] p-6 rounded-xl border border-gray-800"
      >
        ⭐⭐⭐⭐⭐
      </motion.div>

    </section>
  )
}