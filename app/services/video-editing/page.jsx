"use client"

import { motion } from "framer-motion"

export default function VideoEditingPage() {

    const services = [
        "Social Media Video Editing",
        "YouTube Video Editing",
        "Promotional Video Editing",
        "Advertisement Video Editing",
        "Product Video Editing",
        "Corporate Video Editing",
        "Event Video Editing",
        "Motion Graphics Videos",
        "Subtitle & Caption Videos",
        "AI Creative Videos"
    ]

    const faq = [
        {
            q: "What video editing services do you offer?",
            a: "We provide social media editing, YouTube editing, promotional videos, advertisement videos, product videos, corporate videos and motion graphics."
        },
        {
            q: "What types of videos can you edit?",
            a: "We edit social media reels, YouTube content, advertisements, business promotions, product showcases and educational videos."
        },
        {
            q: "Do you provide video editing for social media?",
            a: "Yes. We create optimized videos for Instagram, Facebook, YouTube and other platforms."
        },
        {
            q: "How long does editing take?",
            a: "Most projects are completed within 2–5 business days depending on complexity."
        },
        {
            q: "Can you add subtitles and captions?",
            a: "Yes. We add subtitles, captions, text animations and motion graphics."
        },
        {
            q: "Can you edit advertisement videos?",
            a: "Yes. We create ad videos for Facebook Ads, Instagram Ads and YouTube Ads."
        }
    ]

    return (
        <main className="bg-black text-white pt-[80px]">

            {/* HERO SECTION */}

            <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover opacity-30"
                >
                    <source src="/videos/editing-bg.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10 px-6">

                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        🎬 Professional Video Editing Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xl mx-auto text-gray-300"
                    >
                        Turn your raw footage into engaging high-quality videos for
                        YouTube, social media, business promotions and advertisements.
                    </motion.p>

                    <div className="flex gap-6 justify-center mt-8">

                        <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                            View Our Work
                        </button>

                        <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                            Get Quote
                        </button>

                    </div>

                </div>

            </section>


            {/* SERVICES */}

            <section className="py-32 px-6">

                <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
                    Our Video Editing Services
                </h2>

                <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">

                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#111] border border-gray-800 p-6 rounded-xl text-center"
                        >

                            <h3 className="text-sm font-semibold">
                                {item}
                            </h3>

                        </motion.div>
                    ))}

                </div>

            </section>


            {/* VIDEO SHOWCASE */}

            <section className="py-32 bg-[#0a0a0a] px-6">

                <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
                    Our Video Editing Works
                </h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#111] rounded-xl overflow-hidden border border-gray-800"
                        >

                            <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                <span className="text-gray-500">Video Preview</span>
                            </div>

                            <div className="p-6">

                                <h3 className="font-semibold mb-2">
                                    Sample Video {index + 1}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    Professional editing with cinematic storytelling.
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </section>


            {/* PROCESS */}

            <section className="py-32 px-6">

                <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
                    Our Editing Process
                </h2>

                <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">

                    {[
                        { title: "Concept", desc: "Understanding your vision and story." },
                        { title: "Editing", desc: "Cutting footage into engaging sequences." },
                        { title: "Motion Graphics", desc: "Adding transitions, animations and effects." },
                        { title: "Final Delivery", desc: "High quality export for all platforms." }
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center"
                        >

                            <div className="text-yellow-400 text-5xl font-bold mb-4">
                                0{index + 1}
                            </div>

                            <h3 className="font-semibold mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {step.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </section>


            {/* FAQ */}

            <section className="py-32 bg-[#0a0a0a] px-6">

                <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
                    Video Editing FAQ
                </h2>

                <div className="max-w-4xl mx-auto space-y-6">

                    {faq.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-800 p-6 rounded-xl"
                        >

                            <h3 className="font-semibold mb-2">
                                {item.q}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {item.a}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </section>


            {/* CTA */}

    

        </main>
    )
}