import React from "react"

import Layout from "../components/layout"

const DashboardPage = () => (
  <Layout>
    <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Personal Dashboard
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I am tracking here what I am consuming online, what I read and what I
          listen to
        </p>
      </div>
    </main>
  </Layout>
)

export default DashboardPage
