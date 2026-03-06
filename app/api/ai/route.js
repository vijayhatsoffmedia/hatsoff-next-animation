import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  try {

    const body = await req.json()

    console.log("User message:", body.message)

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an assistant for Hatsoff Media."
        },
        {
          role: "user",
          content: body.message
        }
      ]
    })

    return Response.json({
      reply: completion.choices[0].message.content
    })

  } catch (error) {

    console.error("FULL ERROR:", error)

    return Response.json({
      reply: "Something went wrong with the AI service."
    })

  }
}