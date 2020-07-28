import React from "react";
import styles from './household-bins-display.module.css'
import {graphql, useStaticQuery} from "gatsby";
import PodPhotos from "./photogallery";

const Display = () => {
  const images = useStaticQuery(graphql`
   query HouseholdBinsPhotos {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "hhbin"}}) {
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
    <h3 className={styles.heading}>HOUSEHOLD Composting Bins</h3>
    <p className={styles.paragraph}>Household Composting Bins from Green Innovations can be used to convert the organic waste generated in a household to nutrient rich organic manure. It comes in a set of 2 Bins made of Fiber Reinforced Plastic. It is portable and can be handled very easily.</p>
    <p className={styles.paragraph}>The organic waste generated daily is mixed with the composting tonic provided and added to the first Bin. The water content in the waste added will be drained through a pipe at the bottom of the Bin. Next day the process of adding waste to the first Bin is repeated. From now onwards the entire waste mixture in the Bin has to be turned daily (once or twice) to maximize the microbial activity and aeration. Once the first Bin is full it is kept aside and the entire process is repeated for the second Bin.</p>
    <p className={styles.paragraph}>Even now also the mixture in the first Bin has to be turned & mixed daily. After 15-20 days the mixture in the first Bin will turn into organic compost and can be used as plant fertilizer. Then the second Bin will be kept aside for curing and the first Bin will be used again for adding the waste. The process will be repeated henceforth.</p>

    <div className={styles.imageContainer}>
      <PodPhotos data={images}/>
    </div>
  </div>
}

export default Display
