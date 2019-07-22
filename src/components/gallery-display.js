import React from "react";
import styles from './gallery-display.module.css'
import PodPhotos from './photogallery'
import {graphql, useStaticQuery} from "gatsby";


const Display = () => {
  const images = useStaticQuery(graphql`
   query GalleryPhotos {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "gallery"}}) {
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
  `);

  return <div className={'wrapper display'}>
    <div className={styles.imageContainer}>
      <PodPhotos data={images}/>
    </div>
  </div>
}

export default Display