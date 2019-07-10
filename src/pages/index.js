import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../components/logo'
import {Link} from "gatsby";
import {FaArrowRight} from "react-icons/fa";

const IndexPage = () => (
  <Layout>
    <SEO title="Green Innovations"/>
    <label htmlFor={'txtfield'}>request a demo</label>
    <div style={{margin: '50vh 40vw', position:"absolute", width:'30%'}}>
      <div id="form" style={{display:'flex', padding:10}}>
        <input id="txtfield" required autoFocus placeholder={'Enter your email'}/>
        <FaArrowRight/>
        <div id="bottomline"></div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
