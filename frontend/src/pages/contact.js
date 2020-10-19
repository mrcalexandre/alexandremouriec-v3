import React from "react"
import "../assets/css/main.css"

export default function Contact({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <div className=" mx-auto mt-4 px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded-lg bg-gray-100">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold uppercase">Contact me</h4>
                <p className="mt-1 mb-3 text-gray-600">Let's chat over email</p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    cols="20"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Message"
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-700 text-white active:bg-gray-00 uppercase text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
