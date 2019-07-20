import React from "react";
import styles from './aboutus-display.module.css'
import {Link} from "gatsby";

const Display = () => {
  return <div className={'wrapper display'} id='aboutus'>
    <h4 className={styles.heading}>Green Innovations</h4>
    <p className={styles.paragraph}><strong>Tech Mechanica Enterprises</strong> is a premier waste management equipment
      manufacturer in
      Kerala. We sell our
      equipment under the brand <strong>Green Innovations</strong>. From a humble beginning in 2015 with the manufacture
      of No fuel
      or Fuel free Incinerators, we are now a major player in the waste management arena with 250+ installations
      across the length & breadth of the state. We are also the Original Equipment Manufacturer for many prominent
      brands in this field.</p>

    <p className={styles.paragraph}>Our <strong>No fuel Incinerator</strong> or <strong>Fuel free
      Incinerator</strong> is famous in the state for its durability & reliability. The
      modular design is helpful in maintenance & repair activities. The ergonomic design helps in operator comfort. We
      are the pioneers in Diesel Incinerators in the state. Our single/double chambered Diesel Incinerators are used
      in many prominent institutions.</p>

    <p className={styles.paragraph}>We are also the only manufacturer of Natural or Organic Composting machines in the
      state. Our Manual or
      Automatic composting machines perform the role of an <strong>Organic Waste Converter (OWC)</strong> by converting
      organic waste
      to nutrient rich compost. It is mainly used in apartment complexes in Mumbai & Bangalore. We are the OEM for a
      prominent brand in these markets.</p>
    <h4 className={styles.heading}>Product Range</h4>
    <ul className={styles.productList}>
      <li><Link to={'/nofuel'}> No Fuel or Fuel Free Incinerator</Link></li>
      <li><Link to={'/diesel'}> Diesel Incinerator</Link></li>
      <li><Link to={'/selfwateringpots'}> Self-Watering Pots</Link></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Napkin Incinerator</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Automatic Composting Machine</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Manual Composting Machine</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Organic Waste Converters</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Waste Shredders</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Waste Dewatering Systems</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Bio Gas Plant</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Composting Bins</a></li>
      {/* eslint-disable-next-line*/}
      <li><a href={'#'}> Vertical Gardens</a></li>
    </ul>

    <h4 className={styles.heading}> Our Strengths </h4>
    <ul className={styles.strengthList}>
      <li>Experienced & Well qualified Management</li>
      <li>Expert technicians with deep fabrication experience</li>
      <li>Manufacturing facility with modern equipment</li>
      <li>In-House R&D for Industry first equipment</li>
      <li>Customization possible based on customer preferences</li>
      <li>Excellent supplier relationship for faster material delivery</li>
      <li>Minimum cycle time & on time delivery</li>
      <li>Excellent goodwill from existing customers</li>
      <li>Reliable After sales support</li>
    </ul>
  </div>
}

export default Display