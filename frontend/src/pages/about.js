import React from "react"
import "../assets/css/main.css"
import Layout from "../components/layout"
import Contact from "../components/contact"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout>
    <h1 className="mt-6 mb-4 text-xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-xl sm:leading-none lg:text-2xl">
      About Me
    </h1>
    <div className="flex items-center justify-center">
      <div className="mx-2 align-middle lg:w-2/3 sm:w-full">
        <div>
          <p className="mx-4 mt-4 leading-9 text-center text-gray-600 bg-gray-100 text-md lg:text-md">
            Hi
            {"  "}I am Alexandre{" "}
            <span role="img" aria-label="waving-hand">
              👋
            </span>{" "}
            I am a <span className="font-bold">Full-Stack developer</span> and
            <span className="font-bold"> recent graduate</span> in Computer
            Science and Web Development from the{" "}
            <span className="font-semibold text-teal-400 underline">
              IUT of Lannion
            </span>
            .
          </p>
          <div class="container mx-auto"></div>
          <p className="mx-4 mt-4 leading-9 text-center text-gray-600 bg-gray-100 font-base text-md lg:text-md">
            Previously, I had the chance to work with amazing companies like{" "}
            <a
              className="font-semibold text-teal-400 underline"
              href="https://apitic.com"
            >
              APITIC
            </a>
            ,{" "}
            <a
              className="font-semibold text-teal-400 underline"
              href="https://getro.com"
            >
              Getro
            </a>{" "}
            or{" "}
            <span className="font-semibold text-teal-400 underline">Henge</span>{" "}
            and am currently looking for{" "}
            <Link className="italic font-semibold" to="#contact">
              something new
            </Link>
            .
          </p>
          <p className="mx-2 mt-4 leading-9 text-center text-gray-600 bg-gray-100 font-base text-md lg:text-md">
            <span className="font-bold">Full-time Curious</span>, I am always
            excited to discover a new industry or topic. In my free time, I read
            a lot, build side-projects, listen to music, learn how to become a
            DJ, and spend time with my close ones.
          </p>
        </div>
      </div>
    </div>
    <h1 className="pb-2 mx-4 mt-8 text-xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-xl sm:leading-none lg:text-2xl">
      From a small town to the Internet, breaking in tech as a Gen Z
    </h1>
    <div class="container px-5 py-18 mt-2 mx-auto flex flex-wrap">
      <div class="flex relative pt-2 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">
          5
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-teal-100 text-teal-500 rounded-full inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
              APITIC
            </h2>
            <p class="leading-relaxed text-gray-700">
              I worked for one year at APITIC where I worked on several products
              for 100+ food businesses around checkout, inventory, and
              e-commerce
            </p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">
          4
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-teal-100 text-teal-500 rounded-full inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
              Getro
            </h2>
            <p class="leading-relaxed text-gray-700">
              I worked remotely as a Frontend Intern at Getro where I took part
              in the rebuild in React of the Getro Network product.
            </p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">
          3
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-teal-100 text-teal-500 rounded-full inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
              <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
              <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
              <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
              <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
              <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
              Disrupting the 3D capture industry at Henge
            </h2>
            <p class="leading-relaxed text-gray-700">
              I joined in January 2017 the early-stage startup Henge to build a
              more affordable way to 3d-scan people and objects.
            </p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">
          2
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-teal-100 text-teal-500 rounded-full inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
              Writing for news medias like{" "}
              <a
                className="font-semibold text-teal-400 underline"
                href="https://www.stuffi.fr/author/alex/"
              >
                Stuffi
              </a>
            </h2>
            <p class="leading-relaxed text-gray-700">
              I joined a news blog to write about Apple and the jailbreak
              community. I then joined Stuffi for a few years where I wrote news
              articles, product reviews and buying guides about the Internet of
              Things, Quantified Self, and more ...
            </p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">
          1
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-teal-100 text-teal-500 rounded-full inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
              From jailbreaking my iPod Touch to moderating a 10000+ Apple fans
              forum
            </h2>
            <p class="leading-relaxed text-gray-700">
              Buying an iPod Touch was my big step in joining the tech world. I
              started experimenting with it, jailbreaking it and modifying with
              various tweaks before sharing my passion as a forum moderator.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Contact />
  </Layout>
)

export default AboutPage
