import { Navbar } from "@/components/navbar"
// import { Hero } from "@/components/hero"
// import { Features } from "@/components/features"
// import { BlogSection } from "@/components/blog-section"
// import { Stats } from "@/components/stats"
// import { Testimonials } from "@/components/testimonials"
import { Body } from "./components/Body"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Body />
      <CTA />
      <Footer />
    </div>
  )
}

