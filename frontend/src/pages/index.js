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
        <div className="w-1/2 align-middle">
          <div>
            <Hero />
            <p className="flex mx-auto mt-4 font-mono text-xl leading-8 text-center text-gray-600 bg-gray-100 sm:text-sm sm:mx-auto lg:mx-4">
              Hi{" "}
              <span role="img" aria-label="wave-hand">
                🇬👋
              </span>{" "}
              I am Alexandre Mouriec, recent graduate in Computer Science and
              Web Development at the IUT of Lannion.
              <br />
              Curious and passionate about tech startups, programming and
              more... I am always excited to discover a new field or topic. I
              love making things so I often work on side-projects. These
              projects help me learn new skills like programming skills and
              solve problems.
              <br />I had the chance to work with amazing companies and talented
              people over the last few years. There, I worked autonomously,
              sometimes remotely on small to really big projects. I love working
              in fast-paced startups trying to solve big problems.
            </p>
          </div>
          <a
            href="https://alexandremouriec.com"
            className="flex justify-center w-1/4 py-2 mx-auto mt-4 text-lg font-bold text-white transition duration-150 ease-in-out bg-teal-400 border border-transparent rounded-lg shadow-lg hover:bg-teal-300 focus:outline-none focus:border-teal-400 focus:shadow-outline-teal hover:shadow-xl"
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
