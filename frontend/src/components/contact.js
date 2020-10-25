import React from "react"
import "../assets/css/main.css"

export default function Contact() {
  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="flex flex-col text-center w-full mb-6">
        <h1 className="text-4xl text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-4xl mt-12">
          Contact Me
        </h1>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-3 w-1/2" data-children-count="1">
            <input
              type="text"
              placeholder="Name"
              className="mt-1 form-input block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          <div className="p-3 w-1/2" data-children-count="1">
            <input
              type="email"
              placeholder="Email"
              className="mt-1 form-input block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          <div className="p-3 w-full" data-children-count="1">
            <textarea
              rows="10"
              className="form-textarea mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-teal focus:border-teal-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Write your message here ..."
            ></textarea>
          </div>
          <div className="flex p-3 w-full justify-center">
            <a
              href=""
              className="flex justify-center px-24 py-2 border border-transparent text-lg font-bold text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:border-teal-400 focus:shadow-outline-teal transition ease-in-out duration-150 shadow-lg rounded-lg"
            >
              Send
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
