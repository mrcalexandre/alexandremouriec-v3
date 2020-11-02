import React from "react"
import "../assets/css/main.css"

export default function Experience() {
  return (
    <div className="flex flex-col">
      <h1 className="mt-12 mb-4 text-3xl font-extrabold leading-10 tracking-tight text-center text-gray-900 lg:text-4xl sm:text-2xl sm:leading-none md:text-4xl">
        Experience
      </h1>
      <div className="text-center">
        <div className="inline-block w-5/6 py-8 align-middle sm:px-6 lg:px-6">
          <div className="overflow-hidden border rounded-lg shadow-sm">
            <table className="w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-white border-b-2 border-gray-50">
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase">
                    Description
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase">
                    Dates
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 hover:shadow-sm">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12">
                        <img
                          className="w-12 h-12 rounded-full"
                          src="https://w7.pngwing.com/pngs/343/183/png-transparent-question-mark-decal-emoji-question-mark-social-media-information-text-messaging-hollow-question-mark-angle-text-logo.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold leading-5 text-gray-900 text-md sm:text-sm">
                          Frontend/Full Stack Engineer
                        </div>
                        <div className="font-medium leading-5 text-left text-gray-500 text-md sm:text-sm">
                          Your Company
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="font-bold leading-5 text-gray-700 text-md sm:text-sm">
                      Working at your exciting company in London
                      <span role="img" aria-label="uk-flag">
                        🇬🇧
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="inline-flex px-4 py-1 font-semibold leading-5 text-teal-800 bg-teal-100 rounded-full text-md sm:text-sm">
                      Now
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 hover:shadow-sm">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12">
                        <img
                          className="w-12 h-12 rounded-full"
                          src="https://cdn.dribbble.com/users/961794/screenshots/13592369/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold leading-5 text-gray-900 text-md sm:text-sm">
                          Frontend Intern
                        </div>
                        <div className="font-medium leading-5 text-left text-gray-500 text-md sm:text-sm">
                          Getro
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="leading-5 text-gray-700 text-md sm:text-sm">
                      Helped with the rebuild of Getro Network in React
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="inline-flex px-2 text-sm font-semibold leading-5 text-gray-500">
                      April 2019 - August 2019
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 hover:shadow-sm">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12">
                        <img
                          className="w-12 h-12 rounded-full"
                          src="https://cdn.dribbble.com/users/961794/screenshots/13592369/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold leading-5 text-gray-900 text-md sm:text-sm">
                          Frontend Intern
                        </div>
                        <div className="font-medium leading-5 text-left text-gray-500 text-md sm:text-sm">
                          Getro
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="leading-5 text-gray-700 text-md sm:text-sm">
                      Helped with the rebuild of Getro Network in React
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="inline-flex px-2 text-sm font-semibold leading-5 text-gray-500">
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
