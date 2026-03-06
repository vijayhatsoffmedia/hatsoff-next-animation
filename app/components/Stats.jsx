"use client"

import { useEffect, useState } from "react"

function Counter({ target }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const counter = setInterval(() => {
      start += increment

      if (start >= target) {
        setCount(target)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [target])

  return <span>{count}</span>
}

export default function Stats() {
  return (
    <section className="py-28 bg-[#0a0a0a] text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">

        <div>
          <h3 className="text-5xl font-bold text-yellow-400 mb-2">
            <Counter target={150} />+
          </h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-yellow-400 mb-2">
            <Counter target={60} />+
          </h3>
          <p className="text-gray-400">Happy Clients</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-yellow-400 mb-2">
            <Counter target={5} />+
          </h3>
          <p className="text-gray-400">Years Experience</p>
        </div>

      </div>

    </section>
  )
}