import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Nav {
            navText
          }
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <header className="text-gray-700">
          <div classname="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex items-center text-gray-900 mb-4 md:mb-0 text-md">
              Alexandre Mouriec
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">First Link</a>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </nav>
          </div>
        </header>
      </div>
    )}
  />
)

export default Nav
