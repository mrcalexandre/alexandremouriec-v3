import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Projects from "../components/projects"
import Layout from "../components/layout"

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
      <Layout>
        <Projects projects={data.allStrapiProject.edges} />
      </Layout>
    )}
  />
)

export default ProjectsPage
