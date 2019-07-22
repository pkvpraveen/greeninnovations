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
import Footer from "./footer";
import Header from "./header";
import WebFont from 'webfontloader';

const Layout = ({children}) => {
  if (typeof window !== "undefined") {
    WebFont.load({
      google: {
        families: ['Roboto', 'Playfair Display', 'GarageGothic Regular', 'Bree Serif']
      }
    });
  }
  return (
    <>
      <div id='container'>
        <div id="main">
          <Header/>
          <main style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>{children}</main>
        </div>
      </div>
      <Footer/>
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
