import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SocialSidebar from "./components/SocialSidebar"
import AIChat from "./components/AIChat"
import ScrollTop from "./components/ScrollTop"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <SocialSidebar />

        <AIChat />


        <ScrollTop />

        {children}

        <Footer />

      </body>
    </html>
  )
}