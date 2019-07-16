import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from '../components/contactus-display'

const ContactUsPage = () => (
  <Layout headerElement={<Display/>}
          align={'flex-end'}
          marginTop='60px'>
    <SEO title="Contact Us"/>
  </Layout>
)

export default ContactUsPage
