import React from "react";
import styles from './selfwateringpots-display.module.css'
import PodPhotos from './photogallery'
import {graphql, useStaticQuery} from "gatsby";

const Display = () => {
  const images = useStaticQuery(graphql`
   query PodPhotos {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "pods"}}) {
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
    <h3 className={styles.heading}>Self-Watering Pots/Containers</h3>
    <ul className={styles.list}>
      <li>Self-watering containers/pots provide a uniform point of moisture directly to plants</li>
      <li>Plants have continuous access to water through transpiration pull</li>
      <li>Water is added to the reservoir through the pipe opening at corner</li>
      <li>Water soluble plant nourishments can also be added through the opening</li>
      <li>Water level indicator helps avoid over watering or under watering</li>
      <li>Watering of plants can be limited to an interval of 7-10 days</li>
      <li>Can be placed Indoor or Outdoor maintaining tidiness of the place</li>
      <li>Potting mixture provided on request</li>
    </ul>
    <div className={styles.imageContainer}>
      <PodPhotos data={images}/>
    </div>
  </div>
}

export default Display