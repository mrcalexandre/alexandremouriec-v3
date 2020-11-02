import React from "react"
import "../assets/css/main.css"

export default function Hero() {
  return (
    <>
      <img
        className="w-auto h-24 mx-auto rounded-full shadow-md lg:h-32 sm:h-24"
        src="/icons/AlexandreMouriec.png"
        alt="Alexandre Mouriec"
      />
      <h1 className="mt-6 text-xl font-extrabold leading-10 tracking-tight text-center text-gray-900 transition-transform duration-500 transform sm:text-xl sm:leading-none lg:text-2xl hover:scale-110">
        {/* Looking for a Full-Stack/Frontend role in London{"  "}
        <span role="img" aria-label="uk-flag">
          🇬🇧
        </span> */}
        Full-Stack Developer and Full-Time Curious
      </h1>
      <div className="flex flex-row justify-center mt-4">
        <a
          href="https://twitter.com/mrcalexandre"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-3 rounded-full shadow-md hover:shadow-xl bg-color-twitter"
        >
          <svg
            stroke="white"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/alexandremouriec"
          title="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-3 mx-4 rounded-full shadow-md hover:shadow-xl bg-color-linkedin"
        >
          <svg
            stroke="white"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://github.com/mrcalexandre"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-3 rounded-full shadow-md hover:shadow-xl bg-color-github"
        >
          <svg
            stroke="white"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </>
  )
}
