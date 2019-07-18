import React from "react";
import styles from './nofuel-display.module.css'
import {graphql, useStaticQuery} from "gatsby";
import PodPhotos from "./photogallery";

const Display = ({}) => {
  const images = useStaticQuery(graphql`
   query NofuelPhotos {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "nofuel"}}) {
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
    <h3 className={styles.heading}>NO FUEL INCINERATOR</h3>
    <ul className={styles.list}>
      <li> No Operational cost</li>
      <li> Low Maintenance</li>
      <li> Works on Natural Draft</li>
      <li> Modular Design for easy Maintenance & Repair</li>
      <li> Ergonomic Design for easy Operation</li>
      <li> Models from 10Kg to 500Kg Capacity</li>
      <li> Site Relocation possible for Smaller Models</li>
    </ul>

    <h4 className={styles.heading}>HOW NO FUEL INCINERATOR WORKS</h4>
    <p className={styles.paragraph}>Waste burners from Green Innovations convert solid waste to ash without using
      electricity or fossil fuel. It uses calorific value present in waste to produce heat energy which converts waste
      to ash in a matter of hours.</p>
    <p className={styles.paragraph}>Combustion air is provided using a natural draft making electricity unnecessary.
      Waste burners are single chambered units. Waste is raised off the bottom of the box by placing it on grates inside
      the unit. Ash generated falls through the grate into the bottom cone during burning. It can be easily removed
      using a sliding door on the bottom cone. Combustion air in Green Innovations waste burners is typically provided
      by draft ports at the bottom of the box allowing for better mixing with the burning waste. The waste is exposed to
      natural drafts through the metal grating on all surfaces including the bottom. This enables air to better mix with
      burning waste and promotes more efficient combustion throughout the burning period. The refractory brick/paste
      lining provides heat retention for longer duration.</p>
    <p className={styles.paragraph}>Stainless Steel construction ensures strong resistance to corrosion and thus long
      product life. Cylindrical construction improves the structural strength and prevents structural faults from
      expansion due to high temperature inside burning chamber. High quality ceramic blanket insulation is provided
      inside the double hull steel structure to prevent high skin temperatures for the waste burner.</p>
    <h4 className={styles.heading}>MAXIMIZING OPERATION EFFICIENCY</h4>
    <p className={styles.paragraph}>More smoke is released into the air during the ‘start-up’ and ‘cool down’ phases of
      the burn cycle than during the ‘full burn phase’ when high temperatures are maintained. Burn only dry feedstock
      initially and periodically add additional waste to the chamber in order to maintain high burn temperatures until
      all waste has been destroyed. A rapid ‘start-up’ can be achieved by first loosely loading dry paper, paperboard
      packing and untreated wood into the bottom of the device. Dry, loosely loaded material will ignite more quickly
      and burn more evenly than a wet, tightly packed load. Wet waste should only be added after the fire is actively
      burning. Overfilling the burn chamber will prevent the turbulent mixing of burnable oxygen, and should be
      avoided.</p>
    <h4 className={styles.heading}>DIRECTIONS FOR USE</h4>
    <ul className={styles.list}>
      <li> Use the equipment to incinerate solid waste only</li>
      <li> Load wet and dry waste in equal proportion by weight</li>
      <li> Only those materials permitted for incineration is allowed</li>
      <li> Initiate the incineration process by loading and igniting dry waste and subsequently add wet waste</li>
      <li> Do not load explosive materials like compressed cans</li>
      <li> Decomposed wastes are not recommended</li>
      <li> Always keep the loading port closed during incineration</li>
      <li> Collect ash from the ash removal door provided at bottom cone once the incineration is complete</li>
      <li> Clean the gratings regularly to ensure unrestricted circulation of air during incineration process</li>
    </ul>
    <div className={styles.imageContainer}>
      <PodPhotos data={images}/>
    </div>
  </div>
}

export default Display