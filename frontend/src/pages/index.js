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
        <div className="mx-4 align-middle lg:w-1/2 sm:w-full">
          <div>
            <Hero />
            <p className="flex mx-auto mt-4 font-mono leading-9 text-center text-gray-600 bg-gray-100 sm:text-sm sm:mx-auto lg:text-lg ">
              Hi, I am Alexandre, Full Stack Developer and recent graduate in
              Computer Science and Web Development from the IUT of Lannion.
              Full-time Curious, I am always excited to discover a new industry
              or topic.
              <br /> I love making things so I often work on side-projects. In
              the past, I had the chance to work with amazing companies like
              Getro or Apitic and am currently looking for something new.
            </p>
          </div>
          <a
            href="https://alexandremouriec.com"
            className="flex justify-center py-2 mx-auto mt-4 text-lg font-bold text-center text-white transition duration-150 ease-in-out bg-teal-400 border border-transparent rounded-lg shadow-lg lg:w-1/4 sm:w-1/2 hover:bg-teal-300 focus:outline-none focus:border-teal-400 focus:shadow-outline-teal hover:shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
