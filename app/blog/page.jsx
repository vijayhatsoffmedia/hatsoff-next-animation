"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    title: "Why Good Design Matters for Your Brand",
    desc: "Learn how professional graphic design builds trust and brand recognition.",
    image: "/blog/design.jpg",
    date: "March 2026",
    slug: "/blog/design-matters"
  },
  {
    title: "Top Video Editing Trends in 2026",
    desc: "Explore the latest cinematic editing styles brands are using today.",
    image: "/blog/video.jpg",
    date: "March 2026",
    slug: "/blog/video-editing-trends"
  },
  {
    title: "How a Website Helps Grow Your Business",
    desc: "Why every modern brand needs a powerful website to succeed.",
    image: "/blog/web.jpg",
    date: "March 2026",
    slug: "/blog/business-website"
  },
  {
    title: "Social Media Marketing Tips for Brands",
    desc: "Practical strategies to grow your audience and engagement.",
    image: "/blog/social.jpg",
    date: "March 2026",
    slug: "/blog/social-media-tips"
  }
]

export default function BlogPage() {

  return (

    <section className="bg-black text-white min-h-screen px-6 md:px-16 py-32">

      {/* Page Title */}

      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
        className="text-center mb-20"
      >

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Our Blog
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Insights, tips and creative ideas from Hatsoff Media to help
          brands grow in the digital world.
        </p>

      </motion.div>


      {/* Blog Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {blogs.map((blog,index)=>(

          <motion.div
            key={index}
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:index*0.15 }}
            whileHover={{ y:-10 }}
            className="group border border-gray-800 rounded-xl overflow-hidden bg-[#0a0a0a]"
          >

            {/* Image */}

            <div className="overflow-hidden">

              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>


            {/* Content */}

            <div className="p-6">

              <p className="text-sm text-yellow-400 mb-2">
                {blog.date}
              </p>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {blog.desc}
              </p>

              <Link
                href={blog.slug}
                className="text-yellow-400 font-medium hover:underline"
              >
                Read More →
              </Link>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  )
}