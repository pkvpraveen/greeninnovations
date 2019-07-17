import React from "react";
import styles from './diesel-display.module.css'

const Display = ({}) => {
  return <div className={'wrapper display'}>
    <h3 className={styles.heading}>DIESEL INCINERATOR </h3>
    <p className={styles.paragraph}>Diesel Incinerators use diesel fuel to convert waste to ash. When compared to no
      fuel Incinerators high temperature in the range of 750 to 850 deg C is achieved in a diesel burner.</p>
    <p className={styles.paragraph}>Combustion air is provided using a natural draft. Diesel Incinerators are
      single/double chambered units. Waste is raised off the bottom of the box by placing it on grates inside the unit.
      Ash generated falls through the grate into the bottom cone during burning. It can be easily removed using a
      sliding door on the bottom cone. Combustion air is provided by draft ports at the bottom of the box allowing for
      better mixing with the burning waste. The waste is exposed to natural drafts through the metal grating on all
      surfaces including the bottom. This enables air to better mix with burning waste and promotes more efficient
      combustion throughout the burning period. The refractory brick/paste lining provides heat retention for longer
      duration.</p>
    <p className={styles.paragraph}>Stainless Steel construction ensures strong resistance to corrosion and thus long
      product life. Cylindrical construction improves the structural strength and prevents structural faults from
      expansion due to high temperature inside burning chamber. High quality ceramic blanket insulation is provided
      inside the double hull steel structure to prevent high skin temperatures for the waste burner.</p>
    <h4 className={styles.heading}>MAXIMIZING OPERATION EFFICIENCY</h4>
    <p className={styles.paragraph}>More smoke is released into the air during the ‘start-up’ and ‘cool down’ phases of
      the burn cycle than during the ‘full burn phase’ when high temperatures are maintained. Dry, loosely loaded
      material will ignite more quickly and burn more evenly than a wet, tightly packed load. Overfilling the burn
      chamber will prevent the turbulent mixing of burnable oxygen, and should be avoided.</p>
    <h4 className={styles.heading}>DIRECTIONS FOR USE</h4>
    <ul className={styles.list}>
      <li>Use the equipment to incinerate solid waste only</li>
      <li>Load the available waste into the incinerator</li>
      <li>Only those materials permitted for incineration is allowed</li>
      <li>Check the diesel level in diesel tank.</li>
      <li>Initiate the incineration process by switching on the diesel burner</li>
      <li>After adequate fire inside (5-10mins), switch off the diesel burner</li>
      <li>Do not load explosive materials like compressed cans</li>
      <li>Decomposed wastes are not recommended</li>
      <li>Always keep the loading port closed during incineration</li>
      <li>Collect ash from the ash removal door provided at bottom cone once the incineration is complete</li>
      <li>Clean the gratings regularly to ensure unrestricted circulation of air during incineration process</li>
    </ul>
  </div>
}

export default Display