import React from "react"
import { Link } from "gatsby"

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to=""
            className="text-2xl font-bold leading-relaxed inline-block py-2 whitespace-no-wrap text-gray-900 hover:underline"
          >
            Alexandre Mouriec
          </Link>
          <button
            className="text-white text-xl px-3 py-1 border border-none bg-transparent block lg:hidden outline-none focus:outline-none"
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
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                to="#about"
                className="px-3 py-2 flex items-center text-xl font-bold rounded-md text-gray-900 hover:bg-gray-200"
              >
                <span className="mx-1">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#projects"
                className="px-3 py-2 flex items-center text-xl font-bold rounded-md text-gray-900 hover:bg-gray-200"
              >
                <span className="mx-1">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#contact"
                className="px-3 py-2 flex items-center text-xl font-bold rounded-md text-gray-900 hover:bg-gray-200"
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
