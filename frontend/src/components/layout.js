import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Footer from "./footer"
import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <main className="bg-gray-100">
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
