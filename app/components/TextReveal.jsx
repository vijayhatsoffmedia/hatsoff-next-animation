"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function TextReveal() {

  const textRef = useRef(null)
  const blob1 = useRef(null)
  const blob2 = useRef(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const words = textRef.current.querySelectorAll(".word")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%"
      }
    })

    tl.from(words, {
      y: 120,
      opacity: 0,
      scale: 0.8,
      stagger: 0.12,
      duration: 1.2,
      ease: "power4.out"
    })

    // blob motion
    gsap.to(blob1.current, {
      x: 250,
      y: -180,
      scale: 1.2,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(blob2.current, {
      x: -250,
      y: 160,
      scale: 1.1,
      duration: 11,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

  }, [])

  const text = "Design Motion Digital That Moves Brands".split(" ")

  return (

    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 overflow-hidden">

      {/* Animated background glow */}

      <div
        ref={blob1}
        className="absolute w-[600px] h-[600px] bg-yellow-400 opacity-20 blur-[200px] rounded-full"
        style={{ top: "15%", left: "15%" }}
      />

      <div
        ref={blob2}
        className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[200px] rounded-full"
        style={{ bottom: "10%", right: "10%" }}
      />


      {/* Text */}

      <h2
        ref={textRef}
        className="relative text-5xl md:text-7xl lg:text-8xl font-bold text-center max-w-5xl leading-tight"
      >

        {text.map((word, index) => (

          <span
            key={index}
            className="word inline-block mr-4 text-white"
          >
            {word}
          </span>

        ))}

      </h2>

    </section>

  )

}