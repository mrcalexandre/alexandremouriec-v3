import React from "react"
import "../assets/css/main.css"
import Hero from "../components/hero"
import Contact from "../components/contact"
import Nav from "../components/nav"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Footer from "../components/footer"

export default function IndexPage() {
  return (
    <main className="bg-gray-100">
      <Nav />
      <div className="flex items-center justify-center">
        <div className="w-full">
          <div>
            <Hero />
            <p className="sm:text-sm sm:mx-auto mt-4 text-xl mx-auto text-center leading-relaxed text-gray-600 lg:mx-auto bg-gray-100">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <svg
          class="animate-bounce w-6 h-6 text-gray-900"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
