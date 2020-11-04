import React from "react"
import "../assets/css/main.css"
import Img from "gatsby-image"

const Projects = ({ projects }) => {
  return (
    <section className="px-8 text-gray-700 sm:px-8 lg:px-32 body-font">
      <h1 className="mt-6 mb-6 text-3xl font-extrabold leading-10 tracking-tight text-center text-gray-900 lg:text-4xl sm:text-2xl sm:leading-none md:text-4xl">
        Projects
      </h1>
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-10">
          {projects.map((project, i) => {
            return (
              <div className="p-4 mx-auto md:w-1/3 sm:w-full sm:mx-auto">
                <div className="flex flex-col h-full p-8 bg-white border rounded-lg shadow-sm hover:shadow-lg">
                  <div className="flex items-center mb-1">
                    <Img
                      fluid={project.node.logo.childImageSharp.fluid}
                      className="w-3/4 mx-auto my-4"
                      alt=""
                    />
                  </div>
                  <h2 className="my-2 font-extrabold text-center text-gray-900 text-md sm:text-md md:text-md lg:text-lg title-font">
                    {project.node.name}
                  </h2>
                  <hr className="px-6 py-2 bg-gray-50"></hr>
                  <div className="flex-grow mb-2">
                    <ul>
                      <li className="flex flex-row py-1 list-none sm:text-xs md:text-xs lg:text-md">
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
                          className="mr-4 text-teal-400"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        {project.node.name}
                      </li>
                      <li className="flex flex-row py-1 list-none sm:text-xs md:text-xs lg:text-md">
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
                          className="mr-4 text-teal-400"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        {project.node.name}
                      </li>
                      <li className="flex flex-row py-1 list-none sm:text-xs md:text-xs lg:text-md">
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
                          className="mr-4 text-teal-400"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        {project.node.name}
                      </li>
                    </ul>
                  </div>
                  <a
                    href={project.node.link}
                    className="flex justify-center py-2 font-bold text-white transition duration-150 ease-in-out bg-teal-400 border border-transparent rounded-lg shadow-md px-auto text-md sm:text-md md:text-md lg:text-lg hover:bg-teal-300 focus:outline-none focus:border-teal-400 focus:shadow-outline-teal hover:shadow-xl"
                  >
                    View
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <a
        href="https://alexandremouriec.com"
        className="flex justify-center mt-8 font-bold text-teal-400 align-middle transition duration-150 ease-in-out hover:text-teal-300 hover:underline focus:outline-none focus:underline"
      >
        View all
      </a>
    </section>
  )
}
export default Projects
