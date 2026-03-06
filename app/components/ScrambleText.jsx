"use client"

import { useEffect, useState } from "react"

export default function ScrambleText({ text }) {
  const [display, setDisplay] = useState("")
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  useEffect(() => {
    let iteration = 0

    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / 2
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  return (
    <h2 className="text-5xl md:text-7xl font-bold text-center">
      {display}
    </h2>
  )
}