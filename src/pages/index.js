import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageImage from '../components/home-page-image'

const IndexPage = () => (
  <Layout>
    <SEO title="Green Innovations"/>
    <div className='wrapper'>
    <HomePageImage/>
    </div>
  </Layout>
)

export default IndexPage
