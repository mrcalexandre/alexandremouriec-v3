import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Nav from "../components/nav"
import Projects from "../components/projects"
import Footer from "../components/footer"

const ProjectsPage = () => (
  <StaticQuery
    query={graphql`
      query {
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
      <main className="bg-gray-100">
        <Nav />
        <Projects projects={data.allStrapiProject.edges} />
        <Footer />
      </main>
    )}
  />
)

export default ProjectsPage
