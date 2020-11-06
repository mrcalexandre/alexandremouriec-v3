import React from "react"
import "../assets/css/main.css"
import ExperienceRow from "../templates/experience"

const Experiences = ({ experiences }) => {
  return (
    <div className="flex flex-col">
      <h1 className="mt-12 mb-1 text-3xl font-extrabold leading-10 tracking-tight text-center text-gray-900 lg:text-4xl sm:text-2xl sm:leading-none md:text-4xl">
        Experience
      </h1>
      <div className="text-center">
        <div className="inline-block w-5/6 py-8 align-middle sm:px-6 lg:px-6">
          <div className="overflow-hidden border rounded-lg shadow-sm">
            <table className="w-full bg-white divide-y divide-gray-200">
              <thead>
                <tr className="bg-white border-b-2 border-gray-50">
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-600 uppercase">
                    Role
                  </th>
                  <th className="hidden px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-600 uppercase lg:table-cell">
                    Description
                  </th>
                  <th className="hidden px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-600 uppercase lg:table-cell">
                    Dates
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {experiences.map((experience, i) => {
                  return (
                    <ExperienceRow
                      experience={experience}
                      key={`${experience.node.strapiId}`}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
