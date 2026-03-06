"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage(){

const [service,setService] = useState("Web Development")

return(

<main className="relative min-h-screen bg-black text-white overflow-hidden pt-[90px]">


{/* GRID BACKGROUND */}

<div className="absolute inset-0 -z-10">

<div className="absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px]" />

<motion.div
animate={{opacity:[0.2,0.4,0.2]}}
transition={{duration:6,repeat:Infinity}}
className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-purple-500/10 blur-[120px]"
/>

</div>


{/* HERO */}

<section className="text-center max-w-3xl mx-auto px-6 mb-20">

<h1 className="text-6xl md:text-7xl font-bold mb-6">

Start Your Next Project

</h1>

<p className="text-gray-400 text-lg">

Tell us about your project, goals, and ideas.  
Our team will review your request and respond with the best solution.

</p>

</section>


{/* MAIN CONTACT LAYOUT */}

<section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 pb-32">


{/* LEFT INFO */}

<motion.div
initial={{opacity:0,x:-60}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}
className="space-y-10"
>

<div>

<h3 className="text-2xl font-bold mb-4">
Contact Information
</h3>

<p className="text-gray-400">
Reach out to discuss your project requirements.
</p>

</div>


<div className="space-y-6">

<div className="border border-gray-800 p-6 rounded-xl bg-[#111]">
<p className="text-yellow-400 font-semibold">Phone</p>
<p className="text-gray-400">+91 XXXXX XXXXX</p>
</div>

<div className="border border-gray-800 p-6 rounded-xl bg-[#111]">
<p className="text-yellow-400 font-semibold">Email</p>
<p className="text-gray-400">contact@hatsoffmedia.com</p>
</div>

<div className="border border-gray-800 p-6 rounded-xl bg-[#111]">
<p className="text-yellow-400 font-semibold">Location</p>
<p className="text-gray-400">Chennai, Tamil Nadu</p>
</div>

</div>


</motion.div>


{/* FORM */}

<motion.div
initial={{opacity:0,x:60}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}
className="bg-[#111]/80 backdrop-blur-xl border border-gray-800 rounded-xl p-10"
>

<form className="space-y-6">

<input
placeholder="Full Name"
className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 outline-none"
/>

<input
placeholder="Email Address"
className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 outline-none"
/>

<input
placeholder="Phone Number"
className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 outline-none"
/>


{/* SERVICE SELECTOR */}

<div>

<p className="text-sm text-gray-400 mb-3">
Service Needed
</p>

<div className="flex flex-wrap gap-3">

{[
"Web Development",
"Digital Marketing",
"Video Editing",
"Graphic Design",
"Animation"
].map((item)=>(
<button
type="button"
key={item}
onClick={()=>setService(item)}
className={`px-4 py-2 rounded-full border ${
service===item
?"bg-yellow-400 text-black border-yellow-400"
:"border-gray-700 text-gray-400"
}`}
>
{item}
</button>
))}

</div>

</div>


{/* BUDGET SLIDER */}

<div>

<p className="text-sm text-gray-400 mb-3">
Project Budget
</p>

<input
type="range"
className="w-full"
/>

</div>


<textarea
rows="4"
placeholder="Describe your project..."
className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 outline-none"
/>


<motion.button
whileHover={{
scale:1.05,
boxShadow:"0px 0px 40px rgba(255,204,0,0.5)"
}}
className="w-full bg-yellow-400 text-black py-4 rounded-full font-semibold"
>

Submit Project Request

</motion.button>

</form>

</motion.div>

</section>


</main>

)
}