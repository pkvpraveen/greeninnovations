/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation";
import {FaEnvelope, FaPhone} from "react-icons/fa";

const Layout = ({children, className}) => {
  const data = useStaticQuery(graphql`
    query {
        desktop: file(relativePath: { eq: "SUS2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
  console.log(data);
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <>

      <BackgroundImage Tag="section"
                       className={className}
                       fluid={imageData}
                       backgroundColor={`#040e18`}
      >
        <div id='container' style={{height: '100vh'}}>
          <Header/>
          <main>{children}</main>
        </div>
      </BackgroundImage>
      <footer id='footer'>
        <div className='contact-container'>
          <p className='contactus'> Contact us</p>
          <p className='phone'><FaPhone/> <a href='tel:+919446605978'>+91 9446605978 </a></p>
          <p className='email'><FaEnvelope/> <a
            href='mailto:greeninnovationsinfo@gmail.com'>greeninnovationsinfo@gmail.com</a></p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledLayout = styled(Layout)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: 100% 100%;
`

export default StyledLayout
