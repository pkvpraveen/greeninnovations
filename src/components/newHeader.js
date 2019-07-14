import React from 'react'
import StickyHeader from 'react-sticky-header';
import Header from './header'
import {graphql, useStaticQuery} from "gatsby";
import BackgroundImage from "gatsby-background-image";

const MyHeader = ({height,headerElement,align}) => {
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
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <StickyHeader
      header={
        <Header/>
      }
    > <BackgroundImage Tag="section"
                       fluid={imageData}
                       backgroundColor={`#040e18`}
    >
      <section style={{minHeight: height, display:'flex',justifyContent:'center',alignItems:align}}>
        {headerElement}
      </section>
    </BackgroundImage>
    </StickyHeader>
  );
}

export default MyHeader