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
          <p className="mx-2 mt-4 leading-9 text-center text-gray-600 bg-gray-100 font-base text-md lg:text-md">
            From a small town in the West of France, I broke into tech thanks to
            the internet as a <span className="font-bold">true GenZ</span>. I
            started by moderating an Apple forum in 2012, then wrote for a few
            years for news medias, including{" "}
            <a
              className="font-semibold text-teal-400 underline"
              href="https://www.stuffi.fr/author/alex/"
            >
              Stuffi
            </a>{" "}
            and{" "}
            <a
              className="font-semibold text-teal-400 underline"
              href="https://www.frandroid.com/author/alexmouriec"
            >
              Frandroid
            </a>
            .
          </p>
          <p className="mx-2 mt-4 leading-9 text-center text-gray-600 bg-gray-100 font-base text-md lg:text-md">
            I then joined the startup world by joining the early-stage startup
            Henge, disrupting the 3d capture industry, before helping how people
            find meaningful jobs at Getro. My recent job was at APITIC where I
            was helping food businesses by building SaaS products for their
            daily needs. In the meantime, I also built{" "}
            <a
              className="font-semibold text-teal-400 underline"
              href="https://www.producthunt.com/@mrcalexandre/made"
            >
              various side-projects
            </a>{" "}
            that you can find on this website.
          </p>
        </div>
      </div>
    </div>
    <Contact />
  </Layout>
)

export default AboutPage
