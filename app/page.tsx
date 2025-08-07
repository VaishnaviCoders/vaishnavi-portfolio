import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BlockPlacement from "@/components/block-placement"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <main>
        <section id="home" className="pt-16">
          <Hero />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="education" className="py-16 bg-white">
          <Education />
        </section>
        <section id="experience" className="py-16">
          <Experience />
        </section>
        <section id="block-placement" className="py-16 bg-white">
          <BlockPlacement />
        </section>
        <section id="skills" className="py-16 bg-white">
          <Skills />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
