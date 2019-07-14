import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = () => {
  return (
    <Layout headerElement={<div className='wrapper display'> coming soon</div>} height='100vh'
            align='center'>
      <SEO title="News"/>
    </Layout>
  )
}

export default NewsPage
