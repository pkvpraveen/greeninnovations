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
import MyHeader from "./newHeader";
import Footer from "./footer";

const Layout = ({children, headerElement, height, align, marginTop = '0px'}) => {

  return (
    <>
      <div id='container'>
        <div id="main">
          <MyHeader height={height} headerElement={headerElement} align={align}/>
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
