/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import "./layout.css"
import {FaEnvelope, FaPhone} from "react-icons/fa";
import MyHeader from "./newHeader";

const Layout = ({children, headerElement, height, align}) => {

  return (
    <>
      <div id='container'>
        <div id="main">
          <MyHeader height={height} headerElement={headerElement} align={align}/>
          <main style={{display: 'flex', justifyContent: 'center', flexDirection:'column'}}>{children}</main>
        </div>
      </div>
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
