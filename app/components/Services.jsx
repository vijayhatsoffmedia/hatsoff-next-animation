"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Graphic Design",
    desc: "Creative visual design solutions that help brands stand out with strong identity and storytelling.",
    items: [
      "Graphic Designing",
      "Movie Poster Designing",
      "Comics Lettering & Editing"
    ]
  },
  {
    title: "Video Production & Motion",
    desc: "Professional video production, editing and motion graphics for brands and creators.",
    items: [
      "Video Editing",
      "Motion Graphics",
      "Animations",
      "AI Videos",
      "Video Shoots & Photo Shoots"
    ]
  },
  {
    title: "Digital & Web",
    desc: "Complete digital presence solutions including websites, marketing and social media growth.",
    items: [
      "Website Development",
      "Social Media Managing",
      "Digital Marketing"
    ]
  }
]

export default function Services() {

  return (

    <section className="bg-black text-white py-32 px-6 md:px-12">

      {/* Title */}

      <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 md:mb-24">
        What We Do
      </h2>


      {/* Grid */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {services.map((service,index)=>(

          <motion.div
            key={index}
            whileHover={{ y:-15, scale:1.02 }}
            transition={{ duration:0.4 }}
            className="relative overflow-hidden border border-gray-700 rounded-xl p-8 bg-[#0c0c0c] group"
          >

            {/* Bubble Glow */}

            <motion.div
              initial={{ scale:0, opacity:0 }}
              whileHover={{ scale:3, opacity:0.15 }}
              transition={{ duration:0.6 }}
              className="absolute w-40 h-40 bg-yellow-400 rounded-full blur-3xl top-10 left-10"
            />


            {/* Header */}

            <div className="flex justify-between items-center mb-6 relative z-10">

              <h3 className="text-2xl md:text-3xl font-semibold">
                {service.title}
              </h3>

              <motion.span
                whileHover={{ x:8 }}
                className="text-yellow-400 text-2xl"
              >
                →
              </motion.span>

            </div>


            {/* Description */}

            <p className="text-gray-400 mb-4 relative z-10">
              {service.desc}
            </p>


            {/* List */}

            <ul className="text-gray-500 space-y-1 relative z-10">
              {service.items.map((item,i)=>(
                <li key={i}>• {item}</li>
              ))}
            </ul>

          </motion.div>

        ))}

      </div>

    </section>

  )

}