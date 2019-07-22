import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/gallery-display";

const GalleryPage = () => {
  return (
    <Layout headerElement={<div className='wrapper display'> coming soon</div>} height='100vh'
            align='center'>
      <SEO title="Gallery"/>
      <Display/>
    </Layout>
  )
}

export default GalleryPage
