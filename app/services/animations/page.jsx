"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AnimationServicePage() {

    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    const services = [
        {
            title: "2D Animation",
            desc: "Creative animated videos for marketing, explainer videos and storytelling."
        },
        {
            title: "Motion Graphics",
            desc: "Dynamic visual animations for social media, ads and brand storytelling."
        },
        {
            title: "Logo Animation",
            desc: "Bring your logo to life with smooth cinematic motion."
        },
        {
            title: "Explainer Videos",
            desc: "Explain complex ideas with engaging animated storytelling."
        },
        {
            title: "Product Animation",
            desc: "Showcase products with attractive animated visuals."
        }
    ]

    return (

        <main ref={container} className="bg-black text-white overflow-hidden">


            {/* HERO TYPEWRITER */}

            <section className="h-screen flex flex-col justify-center items-center text-center px-6">

                <motion.h1
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="text-6xl md:text-8xl font-bold overflow-hidden whitespace-nowrap border-r-4 border-yellow-400"
                >

                    Creative Animation Studio

                </motion.h1>

                <p className="text-gray-400 mt-6 max-w-xl">

                    We design engaging animations, motion graphics,
                    and explainer videos that help brands communicate
                    their story visually.

                </p>

            </section>



            {/* HORIZONTAL SCROLL SERVICES */}

            <section className="h-[120vh] relative">

                <h2 className="text-center text-5xl font-bold mb-16">
                    Our Animation Services
                </h2>

                <div className="overflow-hidden">

                    <motion.div
                        style={{ x }}
                        className="flex gap-10 w-[200%] px-20"
                    >

                        {services.map((service, index) => (

                            <div
                                key={index}
                                className="min-w-[350px] bg-[#111] border border-gray-800 rounded-xl p-10"
                            >

                                <h3 className="text-2xl font-bold mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400">
                                    {service.desc}
                                </p>

                            </div>

                        ))}

                    </motion.div>

                </div>

            </section>



            {/* 3D TILT CARDS */}

            <section className="py-32 px-6">

                <h2 className="text-5xl font-bold text-center mb-20">
                    Why Choose Our Animation
                </h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {[
                        "Creative Storytelling",
                        "High Quality Motion Design",
                        "Fast Project Delivery",
                        "Marketing Focused Videos",
                        "Social Media Optimized",
                        "Custom Animation Style"
                    ].map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{
                                rotateX: 10,
                                rotateY: -10,
                                scale: 1.05
                            }}
                            className="bg-[#111] border border-gray-800 rounded-xl p-10 text-center"
                        >

                            <h3 className="font-semibold text-lg">
                                {item}
                            </h3>

                        </motion.div>

                    ))}

                </div>

            </section>



            {/* COUNTER SECTION */}

            <section className="py-32 bg-[#0a0a0a] text-center">

                <h2 className="text-5xl font-bold mb-16">
                    Our Impact
                </h2>

                <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">

                    {[
                        { num: "150+", label: "Projects Delivered" },
                        { num: "60+", label: "Happy Clients" },
                        { num: "5+", label: "Years Experience" }
                    ].map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >

                            <h3 className="text-6xl font-bold text-yellow-400 mb-4">
                                {item.num}
                            </h3>

                            <p className="text-gray-400">
                                {item.label}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>



            {/* PROCESS TIMELINE */}

            <section className="py-32 px-6">

                <h2 className="text-5xl font-bold text-center mb-20">
                    Our Animation Process
                </h2>

                <div className="max-w-4xl mx-auto space-y-16">

                    {[
                        "Understanding the project idea",
                        "Creating storyboard and script",
                        "Animation production process",
                        "Final video rendering and delivery"
                    ].map((step, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center gap-6"
                        >

                            <div className="text-yellow-400 text-3xl font-bold">
                                0{index + 1}
                            </div>

                            <p className="text-gray-400">
                                {step}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>



            {/* AUTO SCROLL CLIENT LOGOS */}

            <section className="py-20 bg-[#0a0a0a] overflow-hidden">

                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="flex gap-20 text-gray-500 text-lg whitespace-nowrap"
                >

                    <span>Startup Brand</span>
                    <span>Marketing Agency</span>
                    <span>Ecommerce Brand</span>
                    <span>Tech Company</span>
                    <span>Media Production</span>

                </motion.div>

            </section>


        </main>

    )
}