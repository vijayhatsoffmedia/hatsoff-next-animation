"use client"

import { motion } from "framer-motion"

export default function WebDevelopmentPage() {

    const services = [
        {
            title: "Custom Website Development",
            desc: "Fully custom websites tailored for your business goals and brand identity."
        },
        {
            title: "Ecommerce Development",
            desc: "Online stores built for conversions, performance and scalability."
        },
        {
            title: "WordPress Development",
            desc: "Flexible CMS powered websites that allow easy content management."
        },
        {
            title: "Web App Development",
            desc: "Advanced applications built using modern frameworks and APIs."
        }
    ]

    return (

        <main className="bg-black text-white pt-[90px] overflow-hidden">


            {/* HERO — TEXT MASK REVEAL */}

            <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">

                <div className="overflow-hidden">

                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-8xl font-bold"
                    >

                        Web Development

                    </motion.h1>

                </div>

                <p className="text-gray-400 mt-6 max-w-xl">

                    We design and develop high performance websites
                    that combine creativity, speed and scalability.

                </p>

            </section>



            {/* SERVICES GRID WITH SPOTLIGHT */}

            <section className="py-32 px-6">

                <h2 className="text-5xl font-bold text-center mb-20">
                    Development Services
                </h2>

                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {services.map((service, index) => (

                        <motion.div
                            key={index}
                            whileHover={{
                                boxShadow: "0 0 80px rgba(255,204,0,0.2)"
                            }}
                            className="bg-[#111] border border-gray-800 rounded-xl p-12 relative overflow-hidden"
                        >

                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400"
                            />

                            <h3 className="text-3xl font-bold mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-400">
                                {service.desc}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>



            {/* STICKY STORY SECTION */}

            <section className="py-32 px-6 bg-[#0a0a0a]">

                <h2 className="text-5xl font-bold text-center mb-20">
                    Why Businesses Choose Us
                </h2>

                <div className="max-w-4xl mx-auto space-y-24">

                    {[
                        {
                            title: "Performance Focused",
                            desc: "Our websites are optimized for speed, SEO and scalability."
                        },
                        {
                            title: "Modern Technology",
                            desc: "We use modern frameworks like React and Next.js for powerful performance."
                        },
                        {
                            title: "Conversion Driven",
                            desc: "Design and development strategies that help convert visitors into customers."
                        }
                    ].map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >

                            <h3 className="text-3xl font-bold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-400">
                                {item.desc}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>



            {/* SVG PROCESS LINE */}

            <section className="py-32 px-6">

                <h2 className="text-5xl font-bold text-center mb-20">
                    Development Workflow
                </h2>

                <div className="max-w-5xl mx-auto">

                    <svg width="100%" height="120">

                        <motion.line
                            x1="0"
                            y1="60"
                            x2="100%"
                            y2="60"
                            stroke="#ffcc00"
                            strokeWidth="4"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                        />

                    </svg>

                    <div className="grid md:grid-cols-4 gap-10 mt-10 text-center">

                        {[
                            "Planning",
                            "Design",
                            "Development",
                            "Launch"
                        ].map((step, index) => (
                            <div key={index}>
                                <div className="text-yellow-400 font-bold mb-2">
                                    0{index + 1}
                                </div>
                                <p className="text-gray-400">
                                    {step}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </section>



            {/* TECH MARQUEE */}

            <section className="py-24 bg-[#0a0a0a] overflow-hidden">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 whitespace-nowrap text-gray-400 text-lg"
                >

                    <span>React</span>
                    <span>Next.js</span>
                    <span>WordPress</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Shopify</span>
                    <span>Tailwind CSS</span>
                    <span>Framer Motion</span>

                </motion.div>

            </section>



            {/* CODE BLOCK SECTION */}

            <section className="py-32 px-6">

                <h2 className="text-5xl font-bold text-center mb-20">
                    Clean Code Development
                </h2>

                <div className="max-w-4xl mx-auto bg-[#111] border border-gray-800 rounded-xl p-10 font-mono text-left">

                    <motion.pre
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >

                        {`function BuildWebsite(){
  const performance = "fast"
  const design = "modern"
  const result = "high conversion"

  return performance + design + result
}`}

                    </motion.pre>

                </div>

            </section>


        </main>

    )
}