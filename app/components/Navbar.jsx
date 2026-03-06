"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ChevronDown,
  Video,
  Clapperboard,
  Megaphone,
  Code,
  Menu,
  X
} from "lucide-react"

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)

  const services = [
    {
      title: "Video Editing",
      desc: "Professional cinematic editing",
      icon: Video,
      link: "/services/video-editing"
    },
    {
      title: "Animations",
      desc: "2D / 3D motion graphics",
      icon: Clapperboard,
      link: "/services/animations"
    },
    {
      title: "Digital Marketing",
      desc: "SEO & social growth",
      icon: Megaphone,
      link: "/services/digital-marketing"
    },
    {
      title: "Web Development",
      desc: "Modern animated websites",
      icon: Code,
      link: "/services/web-development"
    }
  ]

  return (

    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1200px] h-[70px] px-6 md:px-10 flex items-center justify-between rounded-full bg-black/70 backdrop-blur-xl border border-gray-800"
      >

        {/* LOGO */}

        <Link href="/">
          <Image
            src="/hatsofflogo.png"
            alt="Hatsoff Media"
            width={130}
            height={40}
            className="h-[36px] w-auto"
          />
        </Link>


        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About
          </Link>

          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>

          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>


          {/* SERVICES */}

          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >

            <button className="flex items-center gap-1 hover:text-white transition">
              Services
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>

              {open && (

                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-14 left-1/2 -translate-x-1/2 w-[850px] bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 shadow-2xl"
                >

                  <div className="grid grid-cols-2 gap-6">

                    {services.map((service, i) => {

                      const Icon = service.icon

                      return (

                        <Link
                          key={i}
                          href={service.link}
                          className="flex gap-4 items-start hover:bg-[#1a1a1a] p-4 rounded-xl transition"
                        >

                          <Icon
                            size={30}
                            className="text-yellow-400 mt-1"
                          />

                          <div>

                            <h4 className="text-white font-semibold">
                              {service.title}
                            </h4>

                            <p className="text-gray-400 text-sm">
                              {service.desc}
                            </p>

                          </div>

                        </Link>

                      )

                    })}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </li>


          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

        </ul>


        {/* CTA BUTTON */}

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(255,204,0,0.5)"
          }}
          className="hidden md:block"
        >

          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold"
          >
            Start Project
          </Link>

        </motion.div>


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

      </motion.nav>


      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-[90px] w-[92%] bg-black border border-gray-800 rounded-xl p-6 md:hidden"
          >

            <ul className="flex flex-col gap-6 text-center text-lg">

              <Link href="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>

              <Link href="/about" onClick={() => setMobileMenu(false)}>
                About
              </Link>

              <Link href="/portfolio" onClick={() => setMobileMenu(false)}>
                Portfolio
              </Link>

              <Link href="/blog" onClick={() => setMobileMenu(false)}>
                Blog
              </Link>


              {/* MOBILE SERVICES */}

              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="flex justify-center items-center gap-2"
              >
                Services <ChevronDown size={18}/>
              </button>

              {mobileServices && (

                <div className="flex flex-col gap-4 text-gray-400">

                  {services.map((service,i)=>(
                    <Link
                      key={i}
                      href={service.link}
                      onClick={() => setMobileMenu(false)}
                    >
                      {service.title}
                    </Link>
                  ))}

                </div>

              )}

              <Link
                href="/contact"
                className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold"
              >
                Start Project
              </Link>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  )
}