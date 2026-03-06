"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export default function AIChat() {

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [open, setOpen] = useState(false)

    const sendMessage = async () => {

        if (!message) return

        const userMsg = { user: message }

        setMessages(prev => [...prev, userMsg])

        const res = await fetch("/api/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        })

        const data = await res.json()

        setMessages(prev => [...prev, { ai: data.reply }])

        setMessage("")
    }

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

                        <div className="flex justify-between items-center mb-3">

                            <h3 className="font-semibold text-yellow-400">
                                Hatsoff AI
                            </h3>

                        </div>


                        {/* Messages */}

                        <div className="h-60 overflow-y-auto text-sm space-y-3 mb-4">

                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >

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

                                </motion.div>
                            ))}

                        </div>


                        {/* Input */}

                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ask about services..."
                            className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg outline-none focus:border-yellow-400 transition placeholder-gray-500"
                        />

                        <button
                            onClick={sendMessage}
                            className="w-full bg-yellow-400 text-black py-2 rounded font-medium"
                        >

                            Ask

                        </button>

                    </motion.div>

                )}

            </AnimatePresence>

        </>
    )
}