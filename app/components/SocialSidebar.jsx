"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function SocialSidebar() {

  const socials = [
    { icon: <Instagram size={20}/>, link:"#"},
    { icon: <Facebook size={20}/>, link:"#"},
    { icon: <Linkedin size={20}/>, link:"#"},
    { icon: <Youtube size={20}/>, link:"#"}
  ]

  return (

    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">

      {socials.map((item,index)=>(
        
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          whileHover={{
            scale:1.2,
            backgroundColor:"#ffcc00",
            color:"#000"
          }}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 bg-black/70 backdrop-blur-md transition"
        >
          {item.icon}
        </motion.a>

      ))}

    </div>

  )
}