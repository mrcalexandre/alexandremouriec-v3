import React from "react"
import "../assets/css/main.css"

export default function Projects() {
  return (
    <section className="text-gray-700 body-font">
      <h1 className="text-4xl text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-4xl mt-6">
        Projects
      </h1>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg shadow-lg hover:shadow-xl h-full border bg-white p-8 flex-col">
              <div className="flex items-center mb-1">
                <img
                  src="https://s3-cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/106/100/original/Getro_logo_-_horizontal_-_blue.png?1593869251"
                  className="my-2 w-3/4 mx-auto"
                  alt="Getro"
                />
              </div>
              <h2 className="text-xl text-center title-font font-extrabold text-gray-900 my-2">
                Getro Network Rebuild
              </h2>
              <hr className="px-6 py-3 bg-gray-50"></hr>
              <div className="flex-grow mb-4">
                <ul>
                  <li className="list-none py-2 flex flex-row">
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
                      className="text-green-400 mr-4"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </li>
                  <li className="list-none py-2 flex flex-row">
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
                      className="text-green-400 mr-4"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </li>
                  <li className="list-none py-2 flex flex-row">
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
                      className="text-green-400 mr-4"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </li>
                </ul>
              </div>
              <a
                href="https://alexandremouriec.com"
                className="flex justify-center px-24 py-2 border border-transparent text-lg font-bold text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:border-teal-400 focus:shadow-outline-teal transition ease-in-out duration-150 shadow-lg rounded-lg"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
