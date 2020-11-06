import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <main className="bg-gray-100">
      <Nav />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
