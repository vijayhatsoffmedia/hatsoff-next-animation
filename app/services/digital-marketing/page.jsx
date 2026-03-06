"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export default function DigitalMarketingPage() {

const steps = [
"Business Analysis",
"Competitor Research",
"Strategy Planning",
"Content Creation",
"Campaign Launch",
"Optimization & Scaling"
]

const ref = useRef(null)
const { scrollYProgress } = useScroll()

return (

<main ref={ref} className="bg-black text-white pt-[90px] overflow-hidden">

{/* SCROLL PROGRESS BAR */}

<motion.div
className="fixed top-0 left-0 right-0 h-[3px] bg-yellow-400 origin-left z-50"
style={{ scaleX: scrollYProgress }}
/>

{/* HERO */}

<section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

{/* glowing background */}

<div className="absolute w-[500px] h-[500px] bg-yellow-400/10 blur-[180px] rounded-full top-[-150px]"/>

<motion.h1
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent"
>

🚀 Grow Your Brand Online With Smart Digital Marketing

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.4}}
className="text-gray-400 max-w-xl mb-10"
>

We help businesses build strong social presence,
generate quality leads and increase sales through
strategic digital marketing.

</motion.p>

<div className="flex gap-6">

<motion.button
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold shadow-lg shadow-yellow-400/20"
>
Start My Growth
</motion.button>

<motion.button
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
>
View Packages
</motion.button>

</div>

</section>



{/* ABOUT */}

<section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center">

<motion.h2
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-4xl md:text-6xl font-bold mb-6"
>

Digital Growth Starts Here

</motion.h2>

<motion.p
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{delay:0.2}}
viewport={{once:true}}
className="text-gray-400 max-w-3xl mx-auto"
>

At Hatsoff Media we combine creativity, strategy and
performance marketing to help brands dominate online.

</motion.p>

</section>



{/* SERVICES */}

<section className="py-32 px-6 md:px-12">

<div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

<motion.div
initial={{opacity:0,x:-100}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
whileHover={{y:-10,scale:1.02}}
className="bg-[#111] p-10 rounded-xl border border-gray-800 transition"
>

<h3 className="text-3xl font-bold mb-6">
📱 Social Media Handling
</h3>

<ul className="space-y-3 text-gray-400">

<li>✔ Instagram Management</li>
<li>✔ Facebook Marketing</li>
<li>✔ LinkedIn Branding</li>
<li>✔ YouTube Channel Growth</li>
<li>✔ Twitter Promotion</li>
<li>✔ Monthly Content Calendar</li>
<li>✔ Reels & Post Designing</li>
<li>✔ Caption & Hashtag Strategy</li>

</ul>

</motion.div>



<motion.div
initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
whileHover={{y:-10,scale:1.02}}
className="bg-[#111] p-10 rounded-xl border border-gray-800 transition"
>

<h3 className="text-3xl font-bold mb-6">
🎯 Digital Marketing & Ads
</h3>

<ul className="space-y-3 text-gray-400">

<li>✔ Meta Ads Campaigns</li>
<li>✔ Google Ads Management</li>
<li>✔ Lead Generation Ads</li>
<li>✔ WhatsApp Marketing</li>
<li>✔ Website Traffic Ads</li>
<li>✔ Retargeting Strategy</li>
<li>✔ Conversion Tracking</li>

</ul>

</motion.div>

</div>

</section>



{/* PROCESS */}

<section className="py-32 bg-[#0a0a0a] px-6">

<h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
How We Work
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{steps.map((step,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="bg-[#111] border border-gray-800 rounded-xl p-8 text-center"
>

<div className="text-yellow-400 text-4xl font-bold mb-4">
0{index+1}
</div>

<p className="font-semibold">
{step}
</p>

</motion.div>
))}

</div>

</section>



{/* PRICING */}

<section className="py-32 px-6">

<h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
Marketing Packages
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

<motion.div
whileHover={{y:-10}}
className="bg-[#111] border border-gray-800 p-10 rounded-xl"
>
<h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
<p className="text-gray-400 mb-6">Social Media Handling</p>
<ul className="text-gray-400 space-y-2">
<li>Instagram Management</li>
<li>Content Creation</li>
<li>Monthly Calendar</li>
</ul>
</motion.div>



<motion.div
whileHover={{y:-15,scale:1.05}}
className="bg-yellow-400 text-black p-10 rounded-xl shadow-xl shadow-yellow-400/30"
>

<div className="text-sm font-bold mb-2">Most Popular</div>

<h3 className="text-2xl font-bold mb-4">
Growth Plan
</h3>

<p className="mb-6">
Social Media + Paid Ads
</p>

<ul className="space-y-2">
<li>Full Social Media Handling</li>
<li>Meta Ads Campaign</li>
<li>Lead Generation</li>
</ul>

</motion.div>



<motion.div
whileHover={{y:-10}}
className="bg-[#111] border border-gray-800 p-10 rounded-xl"
>
<h3 className="text-2xl font-bold mb-4">
Performance Plan
</h3>
<p className="text-gray-400 mb-6">
Full Digital Marketing + SEO + Funnel
</p>
<ul className="text-gray-400 space-y-2">
<li>Ads Campaigns</li>
<li>SEO Optimization</li>
<li>Sales Funnel Setup</li>
</ul>
</motion.div>

</div>

</section>

</main>
)
}