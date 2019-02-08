import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const Puff = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from thePuff Page</h1>
    <p>Welcome to page Pufff</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>

)


export default Puff 
