"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Understanding your brand, goals and audience before starting the creative process."
  },
  {
    number: "02",
    title: "Design",
    desc: "Creating visual concepts, branding, graphics and digital experiences."
  },
  {
    number: "03",
    title: "Production",
    desc: "Developing videos, motion graphics, websites and marketing assets."
  },
  {
    number: "04",
    title: "Launch",
    desc: "Delivering final work and helping brands launch successfully."
  }
]

export default function Process() {
  return (
    <section className="bg-[#0b0b0b] text-white py-32 px-6 md:px-12">

      {/* Section Title */}
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-24">
        Our Process
      </h2>

      <div className="relative max-w-7xl mx-auto">

        {/* Timeline line */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-700"></div>

        <div className="grid md:grid-cols-4 gap-16">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >

              {/* Timeline dot */}
              <div className="hidden md:flex justify-center mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0px #facc15",
                      "0 0 20px #facc15",
                      "0 0 0px #facc15"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-6 h-6 rounded-full bg-yellow-400"
                />
              </div>

              {/* Step Number */}
              <h3 className="text-4xl font-bold text-yellow-400 mb-4">
                {step.number}
              </h3>

              {/* Step Title */}
              <h4 className="text-2xl font-semibold mb-4">
                {step.title}
              </h4>

              {/* Step Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}