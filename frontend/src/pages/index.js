import React from "react"
import "../assets/css/main.css"
import Hero from "../components/hero"
import Nav from "../components/nav"
import Experience from "../components/experience"
import Projects from "../components/projects"

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
      <Experience />
      <Projects />
    </main>
  )
}
