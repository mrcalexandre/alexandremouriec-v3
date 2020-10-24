import React from "react"
import "../assets/css/main.css"

export default function Experience() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-4xl mt-12 mb-4">
        Experience
      </h1>
      <div className="text-center">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-6">
          <div className="shadow overflow-hidden rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="border-b-2 border-gray-50 bg-white">
                  <th className="px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Dates
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 hover:shadow-md">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://cdn.dribbble.com/users/961794/screenshots/13592369/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-md leading-5 text-gray-900 font-semibold">
                          Frontend/Full Stack Engineer
                        </div>
                        <div className="text-md text-left leading-5 font-medium text-gray-500">
                          Your Company
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-md font-bold leading-5 text-gray-700">
                      Working at your exciting company in London
                      <span role="img" aria-label="uk-flag">
                        🇬🇧
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="px-4 py-1 inline-flex text-md leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                      Now
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 hover:shadow-md">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://cdn.dribbble.com/users/961794/screenshots/13592369/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-md leading-5 text-gray-900 font-semibold">
                          Frontend Intern
                        </div>
                        <div className="text-md text-left leading-5 font-medium text-gray-500">
                          Getro
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-md leading-5 text-gray-700">
                      Helped with the rebuild of Getro Network in React
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="px-2 inline-flex text-sm leading-5 text-gray-500 font-semibold">
                      April 2019 - August 2019
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 hover:shadow-md">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://cdn.dribbble.com/users/961794/screenshots/13592369/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-md leading-5 text-gray-900 font-semibold">
                          Frontend Intern
                        </div>
                        <div className="text-md text-left leading-5 font-medium text-gray-500">
                          Getro
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-md leading-5 text-gray-700">
                      Helped with the rebuild of Getro Network in React
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="px-2 inline-flex text-sm leading-5 text-gray-500 font-semibold">
                      April 2019 - August 2019
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
