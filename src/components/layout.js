/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation";
import {FaEnvelope, FaPhone} from "react-icons/fa";

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id='container'>
        <div id='main'>
          <Header/>
          <Navigation/>
          <main>{children}</main>
        </div>
      </div>
      <footer id='footer'>
        <div className='contact-container'>
          <p className='contactus'> Contact us</p>
          <p className='phone'><FaPhone/> <a href='tel:+919446605978'>+91 944605978 </a></p>
          <p className='email'><FaEnvelope/> <a href='mailto:info@greeninnovations.in'>info@greeninnovations.in</a></p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
