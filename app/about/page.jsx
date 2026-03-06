"use client"

import { motion } from "framer-motion"
import ScrambleText from "../components/ScrambleText"
import Stats from "../components/Stats"

const skills = [
  "Graphic Design",
  "Motion Graphics",
  "Video Editing",
  "Brand Identity",
  "Web Development",
  "Digital Marketing",
  "AI Video Creation",
  "Social Media Management"
]

const timeline = [
  { year: "2021", text: "Hatsoff Media was founded." },
  { year: "2022", text: "Started video production services." },
  { year: "2023", text: "Expanded into web development." },
  { year: "2024", text: "Serving clients across industries." }
]

export default function AboutPage() {
  return (
    <main className="bg-black text-white pt-[80px] overflow-hidden">

      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">

        <ScrambleText text="Creative Studio For Modern Brands" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 mt-6 max-w-2xl"
        >
          Hatsoff Media helps brands stand out with powerful visual storytelling,
          cinematic videos, branding and modern digital experiences.
        </motion.p>

      </section>


      {/* STATS */}
      <Stats />


      {/* STORY */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Hatsoff Media started with a vision to transform how brands
            communicate visually. We combine creativity, technology and
            storytelling to produce content that moves people.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From movie posters to cinematic videos and modern websites,
            our mission is to help businesses grow with powerful digital
            experiences.
          </p>

        </motion.div>

        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#111] border border-gray-800 rounded-xl p-12"
        >

          <h3 className="text-2xl font-semibold mb-6">
            What We Do
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>• Graphic Designing</li>
            <li>• Motion Graphics</li>
            <li>• Video Editing</li>
            <li>• Movie Poster Designing</li>
            <li>• AI Video Creation</li>
            <li>• Website Development</li>
          </ul>

        </motion.div>

      </section>


      {/* SKILLS MARQUEE */}
      <section className="py-20 overflow-hidden border-y border-gray-800">

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap text-3xl md:text-5xl font-semibold"
        >
          {skills.map((skill, index) => (
            <span key={index} className="text-yellow-400">
              {skill}
            </span>
          ))}

          {skills.map((skill, index) => (
            <span key={index + 100} className="text-yellow-400">
              {skill}
            </span>
          ))}
        </motion.div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 md:px-12">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Why Brands Choose Hatsoff
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {[
            {
              title: "Creative Thinking",
              desc: "Every project starts with fresh ideas and bold creativity."
            },
            {
              title: "Modern Technology",
              desc: "We combine design tools, AI and motion graphics."
            },
            {
              title: "Results Driven",
              desc: "Our goal is to help brands grow and stand out."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#111] p-12 border border-gray-800 rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* ADVANCED TIMELINE */}
      <section className="py-40 bg-[#0a0a0a]">

        <h2 className="text-5xl md:text-7xl font-bold text-center mb-32">
          Our Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">

          {/* vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2 }}
            className="absolute left-1/2 top-0 w-[2px] bg-gray-700 -translate-x-1/2"
          />

          {timeline.map((item, index) => {

            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center mb-24 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >

                {/* card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-[#111] border border-gray-800 p-8 rounded-xl w-[40%] ${
                    isLeft ? "mr-auto" : "ml-auto"
                  }`}
                >

                  <h3 className="text-yellow-400 text-2xl font-bold mb-2">
                    {item.year}
                  </h3>

                  <p className="text-gray-400">
                    {item.text}
                  </p>

                </motion.div>

                {/* glowing dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-1/2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2 shadow-[0_0_20px_#facc15]"
                />

              </motion.div>
            )
          })}

        </div>

      </section>

    </main>
  )
}