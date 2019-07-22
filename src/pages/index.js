import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from '../components/index-display'

const IndexPage = () => {
  return (
    <Layout headerElement={<Display/>}
            height='100vh'
            align='center'
            marginTop='70px'>
      <SEO title="Home"/>
      <Display/>
    </Layout>
  )
}

export default IndexPage
