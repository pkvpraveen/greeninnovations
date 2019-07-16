import React from "react";
import {Carousel} from "react-responsive-carousel";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

export default () => {

  const data = useStaticQuery(graphql`
   query AssetsPhotos {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "carousel"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
  `)
  const images = data.allFile.edges.map(e => <div key={e.node.childImageSharp.fluid.name}><img src={e.node.childImageSharp.fluid.src} alt='image'/>
  </div>)
  return (
    <Carousel autoPlay infiniteLoop  useKeyboardArrows emulateTouch showThumbs={false}>
      {images}
    </Carousel>
  );
}
