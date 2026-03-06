"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const [mobile, setMobile] = useState(false)

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ]

  return (

    <div className="fixed top-6 left-0 w-full flex justify-center z-50">

      {/* Floating Navbar */}

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-8 md:px-12 h-[65px] w-[95%] md:w-[1100px] rounded-full bg-black/70 backdrop-blur-xl border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
      >

        {/* LOGO */}

        <motion.div whileHover={{ scale: 1.05 }}>

          <Link href="/">
            <Image
              src="/hatsofflogo.png"
              alt="Hatsoff Media"
              width={110}
              height={40}
              className="h-[36px] w-auto"
            />
          </Link>

        </motion.div>



        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          {menu.map((item, index) => (
            <li key={index} className="relative group">

              <Link
                href={item.path}
                className="text-gray-300 group-hover:text-white transition"
              >
                {item.name}
              </Link>

              {/* Hover bubble */}

              <motion.span
                layoutId="navbubble"
                className="absolute left-0 -bottom-2 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all"
              />

            </li>
          ))}



          {/* SERVICES */}

          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >

            <button className="flex items-center gap-1 text-gray-300 hover:text-white">

              Services
              <ChevronDown size={16} />

            </button>

            <AnimatePresence>

              {open && (

                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 w-56 bg-[#111] border border-gray-800 rounded-xl p-4 shadow-xl"
                >

                  <ul className="flex flex-col gap-3 text-gray-200">

                    <Link
                      href="/services/video-editing"
                      className="hover:text-yellow-400 transition"
                    >
                      Video Editing
                    </Link>

                    <Link
                      href="/services/animations"
                      className="hover:text-yellow-400 transition"
                    >
                      Animations
                    </Link>

                    <Link
                      href="/services/digital-marketing"
                      className="hover:text-yellow-400 transition"
                    >
                      Digital Marketing
                    </Link>

                    <Link
                      href="/services/web-development"
                      className="hover:text-yellow-400 transition"
                    >
                      Web Development
                    </Link>

                  </ul>
                </motion.div>

              )}

            </AnimatePresence>

          </li>

        </ul>



        {/* CTA */}

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(255,204,0,0.6)"
          }}
          className="hidden md:block"
        >

          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold"
          >
            Start Project
          </Link>

        </motion.div>



        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden text-white"
        >
          {mobile ? <X size={28} /> : <Menu size={28} />}
        </button>


      </motion.nav>



      {/* MOBILE MENU PANEL */}

      <AnimatePresence>

        {mobile && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-[80px] w-[90%] bg-black border border-gray-800 rounded-xl p-8 md:hidden"
          >

            <ul className="flex flex-col gap-6 text-center">

              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setMobile(false)}
                  className="text-lg"
                >
                  {item.name}
                </Link>
              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>


    </div>

  )
}