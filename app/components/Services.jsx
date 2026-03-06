"use client"

import { motion } from "framer-motion"
import { PenTool, Film, Globe } from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Graphic Design",
    desc: "Creative visual design solutions that help brands stand out with strong identity and storytelling.",
    items: [
      "Graphic Designing",
      "Movie Poster Designing",
      "Comics Lettering & Editing"
    ]
  },
  {
    icon: Film,
    title: "Video Production & Motion",
    desc: "Professional video production, editing and motion graphics for brands and creators.",
    items: [
      "Video Editing",
      "Motion Graphics",
      "Animations",
      "AI Videos",
      "Video Shoots & Photo Shoots"
    ]
  },
  {
    icon: Globe,
    title: "Digital & Web",
    desc: "Complete digital presence solutions including websites, marketing and social media growth.",
    items: [
      "Website Development",
      "Social Media Managing",
      "Digital Marketing"
    ]
  }
]

export default function Services() {

  return (

    <section className="bg-black text-white py-32 px-6 md:px-12 relative overflow-hidden">

      {/* background glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-400/10 blur-[200px]" />

      {/* title */}

      <motion.h2
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
        className="text-4xl md:text-7xl font-bold text-center mb-20"
      >
        What We Do
      </motion.h2>


      {/* cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {services.map((service,index)=>{

          const Icon = service.icon

          return(

            <motion.div
              key={index}
              initial={{ opacity:0, y:60 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:index*0.2 }}
              whileHover={{ y:-15 }}
              className="group relative rounded-2xl border border-gray-800 bg-[#0a0a0a] p-8 overflow-hidden"
            >

              {/* hover glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:to-yellow-400/5 transition duration-500"/>


              {/* icon */}

              <motion.div
                whileHover={{ rotate:8, scale:1.1 }}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-400 text-black mb-6"
              >
                <Icon size={28}/>
              </motion.div>


              {/* title */}

              <h3 className="text-2xl font-semibold mb-3 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>


              {/* description */}

              <p className="text-gray-400 mb-6">
                {service.desc}
              </p>


              {/* list */}

              <ul className="space-y-2 text-gray-500">

                {service.items.map((item,i)=>(
                  <li key={i} className="flex items-center gap-2">

                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"/>

                    {item}

                  </li>
                ))}

              </ul>


              {/* arrow */}

              <motion.div
                initial={{ opacity:0 }}
                whileHover={{ opacity:1, x:10 }}
                className="absolute bottom-6 right-6 text-yellow-400 text-xl"
              >
                →
              </motion.div>

            </motion.div>

          )

        })}

      </div>

    </section>

  )

}