"use client"

import { motion } from "framer-motion"
import {
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Mail,
  Palette,
  Video,
  Globe,
  Megaphone
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white px-6 md:px-12 pt-32 pb-12">

      {/* CTA */}
      <div className="text-center mb-24">

        <h2 className="text-4xl md:text-7xl font-bold mb-6">
          Let's Create Something Amazing
        </h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Hatsoff Media helps brands stand out with creative design,
          video production and digital marketing solutions.
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:hatsoffmedia@gmail.com"
          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold"
        >
          <Mail size={18} />
          Start Your Project
        </motion.a>

      </div>

      {/* Footer Grid */}
      <div className="grid md:grid-cols-4 gap-12 border-t border-gray-800 pt-16 max-w-7xl mx-auto">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Hatsoff Media
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Creative design studio specializing in branding,
            video production, motion graphics and digital marketing.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li className="flex items-center gap-2">
              <Palette size={16} /> Graphic Design
            </li>

            <li className="flex items-center gap-2">
              <Video size={16} /> Video Editing
            </li>

            <li className="flex items-center gap-2">
              <Video size={16} /> Motion Graphics
            </li>

            <li className="flex items-center gap-2">
              <Globe size={16} /> Website Development
            </li>

            <li className="flex items-center gap-2">
              <Megaphone size={16} /> Digital Marketing
            </li>

          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Our Work</li>
            <li>Process</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>

          <div className="flex gap-4">

            <motion.a whileHover={{ scale: 1.2 }}>
              <Instagram />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }}>
              <Linkedin />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }}>
              <Youtube />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }}>
              <Facebook />
            </motion.a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-16 border-t border-gray-800 pt-8">
        © {new Date().getFullYear()} Hatsoff Media. All rights reserved.
      </div>

    </footer>
  )
}