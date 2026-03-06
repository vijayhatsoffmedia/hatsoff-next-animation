"use client"

import { motion } from "framer-motion"
import ScrambleText from "../components/ScrambleText"

const skills = [
  "Graphic Design",
  "Motion Graphics",
  "Video Editing",
  "Brand Identity",
  "Web Development",
  "Digital Marketing",
  "AI Videos",
  "Social Media"
]

const timeline = [
  { year: "2021", text: "Hatsoff Media was founded." },
  { year: "2022", text: "Expanded into video production." },
  { year: "2023", text: "Started web development services." },
  { year: "2024", text: "Serving multiple industries." }
]

export default function AboutPage() {

  return (

    <main className="bg-black text-white pt-[90px] overflow-hidden">

      {/* HERO */}

      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 relative">

        <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full"/>

        <ScrambleText text="Creative Studio For Modern Brands" />

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1}}
          className="text-gray-400 mt-6 max-w-2xl"
        >
          Hatsoff Media blends creativity, motion and technology to craft
          powerful digital experiences for brands.
        </motion.p>

      </section>



      {/* CREATIVE PROCESS */}

      <section className="py-24 px-6 md:px-12">

        <h2 className="text-5xl font-bold text-center mb-20">
          Our Creative Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

          {[
            {title:"Research",desc:"Understanding the brand and audience"},
            {title:"Concept",desc:"Developing strong creative ideas"},
            {title:"Production",desc:"Design, animation and development"},
            {title:"Launch",desc:"Delivering polished experiences"}
          ].map((step,i)=>(
            
            <motion.div
              key={i}
              initial={{opacity:0,y:60}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:i*0.2}}
              whileHover={{scale:1.05}}
              className="relative p-10 bg-[#111] border border-gray-800 rounded-xl"
            >

              <span className="text-yellow-400 text-4xl font-bold">
                0{i+1}
              </span>

              <h3 className="text-xl font-semibold mt-4 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {step.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>



      {/* SKILLS ORBIT */}

      <section className="py-28 relative overflow-hidden">

        <h2 className="text-5xl font-bold text-center mb-20">
          Our Expertise
        </h2>

        <div className="relative w-[500px] h-[500px] mx-auto">

          {skills.map((skill,i)=>{

            const angle=(i/skills.length)*Math.PI*2
            const x=Math.cos(angle)*180
            const y=Math.sin(angle)*180

            return(

              <motion.div
                key={i}
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                animate={{x,y}}
                transition={{duration:0.8}}
                className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                px-5 py-2 bg-[#111] border border-gray-700
                rounded-full text-yellow-400"
              >

                {skill}

              </motion.div>

            )

          })}

        </div>

      </section>



      {/* TIMELINE */}

      <section className="py-32 bg-[#0a0a0a]">

        <h2 className="text-5xl font-bold text-center mb-24">
          Our Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">

          {/* vertical line */}

          <div className="absolute left-1/2 top-0 w-[2px] bg-gray-700 h-full -translate-x-1/2"/>

          {timeline.map((item,index)=>{

            const left=index%2===0

            return(

              <motion.div
                key={index}
                initial={{opacity:0,y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}}
                className={`flex items-center mb-20 ${
                  left?"justify-start":"justify-end"
                }`}
              >

                <div
                  className={`bg-[#111] border border-gray-800
                  p-8 rounded-xl w-[40%] ${
                    left?"mr-auto":"ml-auto"
                  }`}
                >

                  <h3 className="text-yellow-400 text-2xl font-bold mb-2">
                    {item.year}
                  </h3>

                  <p className="text-gray-400">
                    {item.text}
                  </p>

                </div>

                <div className="absolute left-1/2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2"/>

              </motion.div>

            )

          })}

        </div>

      </section>



  

    </main>

  )

}