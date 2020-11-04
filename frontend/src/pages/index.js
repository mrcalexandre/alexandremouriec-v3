import React from "react"
import "../assets/css/main.css"
import Hero from "../components/hero"
import Contact from "../components/contact"
import Nav from "../components/nav"
import Experiences from "../components/experiences"
import Projects from "../components/projects"
import Footer from "../components/footer"
import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiExperience {
          edges {
            node {
              strapiId
              role
              logo {
                childImageSharp {
                  fluid(maxWidth: 84, maxHeight: 84) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              company
              description
              date
            }
          }
        }
        allStrapiProject {
          edges {
            node {
              strapiId
              name
              logo {
                childImageSharp {
                  fluid(maxWidth: 200, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }

              link
            }
          }
        }
      }
    `}
    render={data => (
      <main className="bg-gray-100">
        <Nav />
        <div className="flex items-center justify-center">
          <div className="mx-4 align-middle lg:w-1/2 sm:w-full">
            <div>
              <Hero />
              <p className="mx-4 mt-4 font-mono text-xs leading-9 text-center text-gray-600 bg-gray-100 lg:text-md">
                Hi, I am Alexandre,{" "}
                <span className="hover:text-teal-400">
                  Full Stack Developer
                </span>{" "}
                and <span className="hover:text-teal-400">recent graduate</span>{" "}
                in Computer Science and Web Development. Full-time Curious, I am
                currently looking for my next opportunity{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </p>
            </div>
            <a
              href="https://alexandremouriec.com"
              className="flex justify-center w-1/2 py-2 mx-auto mt-4 text-lg font-bold text-center text-white transition duration-150 ease-in-out bg-teal-400 border border-transparent rounded-lg shadow-lg lg:w-1/4 hover:bg-teal-300 focus:outline-none focus:border-teal-400 focus:shadow-outline-teal hover:shadow-xl"
            >
              Learn More
            </a>
          </div>
        </div>
        <Experiences experiences={data.allStrapiExperience.edges} />
        <Projects projects={data.allStrapiProject.edges} />
        <Contact />
        <Footer />
      </main>
    )}
  />
)

export default IndexPage
