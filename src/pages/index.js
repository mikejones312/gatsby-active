import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/globals/navbar/Header-front'
import Wewrite from '../components/front/weWrite'
import Partners from '../components/front/partners'
import Responsive from '../components/front/responsive'
import Video from '../components/front/video'
import Comm from '../components/front/comm'
import Contact from '../components/front/contact'
import Footer from '../components/front/footer'
import Contactview from '../components/globals/contactview'

require('../components/main');


const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Wewrite />
    <Partners />
    <Responsive />
    <Video />
    <Comm />
    <Contact />
    <Footer />
    <Contactview />  
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-nice/">Go to page Nice</Link>
    
  </Layout>
  
)

export default IndexPage
