import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from '../components/aboutus-display'

const AboutUsPage = () => (
  <Layout headerElement={<Display/>} height={''} align='flex-end'>
    <SEO title="About Us"/>

  </Layout>);
export default AboutUsPage
