import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from '../components/household-incinerator-display'

const ProductPage = () => {
  return (
    <Layout headerElement={<div className='wrapper display'> coming soon</div>} height='100vh'
            align='center'>
      <SEO title="Products"/>
      <Display/>
    </Layout>
  )
}

export default ProductPage
