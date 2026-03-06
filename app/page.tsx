import Hero from "./components/Hero"
import Services from "./components/Services"
import TextReveal from "./components/TextReveal"
import Portfolio from "./components/Portfolio"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TextReveal />
      <Portfolio />
      <Process />
      <Testimonials />
    </>
  )
}