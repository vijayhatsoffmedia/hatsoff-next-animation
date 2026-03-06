"use client"

import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[80px] flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6">

      {/* Aurora Background */}

      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-yellow-400/20 blur-[150px] md:blur-[200px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -120, 120, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-500/20 blur-[160px] md:blur-[220px] rounded-full"
      />

      {/* Floating Shapes */}

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[20%] left-[10%] w-5 h-5 border border-yellow-400 rotate-45"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-[20%] right-[15%] w-3 h-3 bg-yellow-400 rounded-full"
      />

      {/* Heading */}

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="text-[42px] sm:text-[55px] md:text-[80px] font-bold text-center leading-tight relative"
      >

        <motion.span variants={item} className="block">
          Creative
        </motion.span>

        <motion.span variants={item} className="block relative">

          <span className="text-yellow-400 relative">
            Design

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute left-0 -bottom-2 h-[3px] w-full bg-yellow-400 origin-left"
            />

          </span>

        </motion.span>

        <motion.span variants={item} className="block">
          That Moves Brands
        </motion.span>

      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-gray-400 text-base md:text-lg text-center max-w-xl"
      >
        We craft visual identities, websites and motion graphics
        that make brands stand out in the digital world.
      </motion.p>

      {/* CTA */}

      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 40px rgba(255,204,0,0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 px-6 py-3 md:px-8 md:py-4 bg-yellow-400 text-black font-semibold rounded-full"
      >
        View Our Work
      </motion.button>

    </section>
  )
}