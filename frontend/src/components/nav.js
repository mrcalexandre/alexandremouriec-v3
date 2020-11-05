import React from "react"
import { Link } from "gatsby"

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 navbar-expand-lg">
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
        <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="inline-block py-2 text-xl font-bold leading-relaxed text-gray-900 whitespace-no-wrap hover:underline"
          >
            Alexandre Mouriec
          </Link>
          <button
            className="block px-3 py-1 text-xl text-white bg-transparent border border-none outline-none lg:hidden focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            {/* <li className="nav-item">
              <Link
                to="#dashboard"
                className="flex items-center px-3 py-2 text-lg font-bold text-gray-900 rounded-md hover:bg-gray-200"
              >
                Dashboard
                <div className="relative top-0 right-0 flex mr-2 -mt-4">
                  <span className="absolute inline-flex animate-ping">
                    <span className="inline-flex w-2 h-2 bg-pink-400 rounded-full opacity-75"></span>
                  </span>
                  <span className="relative inline-flex w-2 h-2 bg-pink-500 rounded-full"></span>
                </div>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/about"
                className="flex items-center px-3 py-2 text-lg font-bold text-gray-900 rounded-md hover:bg-gray-200"
              >
                <span className="mx-1">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="flex items-center px-3 py-2 text-lg font-bold text-gray-900 rounded-md hover:bg-gray-200"
              >
                <span className="mx-1">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="flex items-center px-3 py-2 text-lg font-bold text-gray-900 rounded-md hover:bg-gray-200"
              >
                <span className="mx-1">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
