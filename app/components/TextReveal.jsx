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

    const words = textRef.current.querySelectorAll("span")

    gsap.from(words, {
      y: 120,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      }
    })

    // Background blob animation
    gsap.to(blob1.current, {
      x: 200,
      y: -150,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(blob2.current, {
      x: -200,
      y: 120,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

  }, [])

  const text = "Design Motion Digital That Moves Brands".split(" ")

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 md:px-10 overflow-hidden">

      {/* Background Blobs */}
      <div
        ref={blob1}
        className="absolute w-[500px] h-[500px] bg-yellow-400 opacity-20 blur-[180px] rounded-full"
        style={{ top: "10%", left: "20%" }}
      ></div>

      <div
        ref={blob2}
        className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[160px] rounded-full"
        style={{ bottom: "10%", right: "20%" }}
      ></div>

      {/* Text */}
      <h2
        ref={textRef}
        className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl leading-tight"
      >
        {text.map((word, index) => (
          <span key={index} className="inline-block mr-3 md:mr-4">
            {word}
          </span>
        ))}
      </h2>

    </section>
  )
}