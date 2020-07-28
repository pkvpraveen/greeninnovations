import React from "react";
import styles from './household-incinerator-display.module.css'
import {graphql, useStaticQuery} from "gatsby";
import PodPhotos from "./photogallery";

const Display = () => {
  const images = useStaticQuery(graphql`
   query HouseholdIncineratorPhotos {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "hhincinerator"}}) {
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
    <h3 className={styles.heading}>HOUSEHOLD Incinerator </h3>
    <p className={styles.paragraph}>Household Incinerators from Green Innovations convert solid waste to ash without using
      electricity or fossil fuel. It uses calorific value present in waste to produce heat energy
      which converts waste to ash in a matter of hours. Combustion air is provided using a natural
      draft making electricity unnecessary. Waste burners are single chambered units. Waste is
      raised off the bottom of the box by placing it on grates inside the unit. Ash generated falls
      through the grate into the bottom container during burning. The waste is exposed to
      natural drafts through the metal grating on all surfaces including the bottom. This enables air
      to better mix with burning waste and promotes more efficient combustion throughout the
      burning period. The refractory paste lining provides heat retention for longer duration.</p>
    <p className={styles.paragraph}>Household Incinerators are No fuel type Incinerators and hence doesn’t incur operational
      costs. It has low lifetime charges for maintenance or repair. It is portable; hence site
      relocation is very easy and can be done by customers themselves.</p>
    <h4 className={styles.subheading}>Directions For Use</h4>
    <ul className={styles.list}>
      <li>Use the equipment to incinerate solid waste only</li>
      <li>Load wet and dry waste in equal proportion by weight</li>
      <li>Initiate the incineration process by loading and igniting dry waste and subsequently add wet waste</li>
      <li>Do not load explosive materials like compressed cans</li>
      <li>Decomposed wastes are not recommended</li>
      <li>Always keep the loading port closed during incineration</li>
      <li>Collect ash from the bottom container once the incineration is complete</li>
      <li>Clean the ash on metal gratings at regular intervals to ensure unrestricted circulation of air during incineration process</li>
    </ul>
    <div className={styles.imageContainer}>
      <PodPhotos data={images}/>
    </div>
  </div>
}

export default Display
