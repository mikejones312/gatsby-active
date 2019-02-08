import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// import Navbar from '../components/globals/navbar/Navbar'
import Helmet from 'react-helmet'
import "./style.css"


const Layout = ({ children }) => (
  <div>
      {children}
    <h1>Hello from Layout</h1>
    <Helmet
    bodyAttributes={{
        class: 'view-homepage'
    }}
/>
      </div>



)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout
