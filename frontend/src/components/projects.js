import React from "react"
import "../assets/css/main.css"
import ProjectCard from "../templates/project"

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
              <ProjectCard project={project} key={`${project.node.strapiId}`} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Projects
