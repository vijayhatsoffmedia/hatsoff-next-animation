"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function SocialSidebar() {

  const socials = [
    {
      icon: <Instagram size={20} />,
      link: "https://instagram.com"
    },
    {
      icon: <Facebook size={20} />,
      link: "https://facebook.com"
    },
    {
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com"
    },
    {
      icon: <Youtube size={20} />,
      link: "https://youtube.com"
    }
  ]

  return (

    <>
    
      {/* DESKTOP SIDEBAR */}

      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">

        {socials.map((item, index) => (

          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "#ffcc00",
              color: "#000"
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 bg-black/70 backdrop-blur-md transition"
          >
            {item.icon}
          </motion.a>

        ))}

      </div>


      {/* MOBILE SOCIAL BAR */}

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 md:hidden bg-black/70 backdrop-blur-md border border-gray-800 px-4 py-2 rounded-full">

        {socials.map((item, index) => (

          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.15,
              backgroundColor: "#ffcc00",
              color: "#000"
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 transition"
          >
            {item.icon}
          </motion.a>

        ))}

      </div>

    </>

  )
}