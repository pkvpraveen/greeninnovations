import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from '../components/index-display'
import AboutUsDisplay from "../components/aboutus-display";
import ContactUsDisplay from "../components/contactus-display";

const IndexPage = () => {
  return (
    <Layout headerElement={<Display/>}
            height='100vh'
            align='center'
            marginTop='70px'>
      <SEO title="Home"/>
      <Display/>
      <AboutUsDisplay/>
    </Layout>
  )
}

export default IndexPage
