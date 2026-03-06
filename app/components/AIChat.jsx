"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export default function AIChat() {

  const [messages, setMessages] = useState([])
  const [open, setOpen] = useState(false)

  const answers = {
    services: "Hatsoff Media offers Graphic Design, Video Editing, Animations, Digital Marketing and Web Development.",
    pricing: "Pricing depends on the project. Contact us to get a custom quote for your business.",
    portfolio: "You can view our portfolio in the Portfolio section of the website.",
    contact: "You can contact Hatsoff Media via the contact page or WhatsApp for quick response.",
    location: "Hatsoff Media operates from Chennai and works with clients worldwide."
  }

  const askQuestion = (question) => {

    let reply = "Please contact Hatsoff Media for more details."

    if (question === "What services do you offer?")
      reply = answers.services

    if (question === "What is your pricing?")
      reply = answers.pricing

    if (question === "Show portfolio")
      reply = answers.portfolio

    if (question === "How to contact you?")
      reply = answers.contact

    if (question === "Where are you located?")
      reply = answers.location

    setMessages(prev => [
      ...prev,
      { user: question },
      { ai: reply }
    ])
  }

  const questions = [
    "What services do you offer?",
    "What is your pricing?",
    "Show portfolio",
    "How to contact you?",
    "Where are you located?"
  ]

  return (

    <>
      {/* Floating Button */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg z-50"
      >
        {open ? <X /> : <MessageCircle />}
      </motion.button>


      {/* Chat Window */}

      <AnimatePresence>
        {open && (

          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 bg-[#111] border border-gray-800 rounded-xl p-4 shadow-2xl z-50"
          >

            {/* Header */}

            <h3 className="font-semibold text-yellow-400 mb-3">
              Hatsoff Assistant
            </h3>


            {/* Messages */}

            <div className="h-56 overflow-y-auto text-sm space-y-3 mb-4">

              {messages.map((m, i) => (
                <div key={i}>

                  {m.user && (
                    <div className="text-right">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg inline-block">
                        {m.user}
                      </span>
                    </div>
                  )}

                  {m.ai && (
                    <div className="text-left">
                      <span className="bg-black border border-gray-700 px-3 py-1 rounded-lg inline-block text-gray-300">
                        {m.ai}
                      </span>
                    </div>
                  )}

                </div>
              ))}

            </div>


            {/* Question Buttons */}

            <div className="flex flex-col gap-2">

              {questions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => askQuestion(q)}
                  className="text-left text-sm bg-black border border-gray-700 px-3 py-2 rounded hover:border-yellow-400 transition"
                >
                  {q}
                </button>
              ))}

            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </>
  )
}