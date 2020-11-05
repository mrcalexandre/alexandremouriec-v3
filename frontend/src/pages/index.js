import React from "react"
import "../assets/css/main.css"
import Hero from "../components/hero"
import Contact from "../components/contact"
import Experiences from "../components/experiences"
import Projects from "../components/projects"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

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
              banner {
                childImageSharp {
                  fluid(maxHeight: 120) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              bulletOne
              bulletTwo
              bulletThree
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
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
            <Link
              to="/about"
              className="flex justify-center w-1/2 py-2 mx-auto mt-4 text-lg font-bold text-center text-white transition duration-150 ease-in-out bg-teal-400 border border-transparent rounded-lg shadow-lg lg:w-1/4 hover:bg-teal-300 focus:outline-none focus:border-teal-400 focus:shadow-outline-teal hover:shadow-xl"
            >
              My resume{""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </Link>
          </div>
        </div>
        <Experiences experiences={data.allStrapiExperience.edges} />
        <Projects projects={data.allStrapiProject.edges} />
        <Link
          to="/projects"
          className="flex justify-center mt-8 font-bold text-teal-400 align-middle transition duration-150 ease-in-out hover:text-teal-300 hover:underline focus:outline-none focus:underline"
        >
          View all
        </Link>
        <Contact />
      </Layout>
    )}
  />
)

export default IndexPage
