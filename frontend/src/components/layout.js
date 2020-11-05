import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <body className="bg-gray-100">
      <Nav />
      {children}
      <Footer />
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
