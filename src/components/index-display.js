import React from "react";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './index-display.module.css'
import {Link} from "gatsby";
import classNames from 'classnames';
import {FaBath, FaLeaf} from "react-icons/fa";
import {IconContext} from "react-icons";
import {GiFireplace} from "react-icons/gi";

export default () => <div className={styles.root}>
  <Carousel/>
  <div className={styles.buttonContainer}>
    <a href='#first' className={styles.button}> Learn More</a>
  </div>
  <div id='first' className='display'>
    <h1 className={classNames(styles.heading, styles.center)}>Who we are</h1>
    <p className={styles.paragraph}><strong>Tech Mechanica Enterprises</strong> is a premier waste management equipment
      manufacturer in Kerala. We sell our equipment under the brand <strong>Green Innovations</strong>. From a humble
      beginning in 2015
      with the manufacture of No fuel or Fuel free Incinerators, we are now a major player in the waste management arena
      with
      250+ installations across the length & breadth of the state. We are also the Original Equipment Manufacturer for
      many prominent brands in this field.</p>

    <h2 className={classNames(styles.heading, styles.center)}>What we build</h2>
    <ul className={styles.products}>
      <li>
        <IconContext.Provider value={{color: "#1b6613"}}>
          <span className={classNames(styles.icon)}><FaLeaf size={80}/></span>
        </IconContext.Provider>
        <h3>No Fuel or Fuel Free Incinerator</h3>
        <p>Want to process your waste without any operational cost?
        </p><p><Link to="/nofuel" className={classNames(styles.transparent_btn, styles.blue)}>Learn More</Link>
      </p>
      </li>
      <li>
        <IconContext.Provider value={{color: "#e25822"}}>
          <span className={classNames(styles.icon)}><GiFireplace size={80}/></span>
        </IconContext.Provider>
        <h3>Diesel Incinerator </h3>
        <p>Diesel Incinerators use diesel fuel to convert waste to ash.</p><p><Link to="/diesel"
                                                                                    className={classNames(styles.transparent_btn, styles.blue)}>Learn
        More</Link></p>
      </li>
      <li>
        <IconContext.Provider value={{color: "rgb(8, 40, 102)"}}>
          <span className={classNames(styles.icon)}><FaBath size={80}/></span>
        </IconContext.Provider>
        <h3 className={styles.subHeading}>Self-Watering Pots</h3>
        <p>The pots that will take care of your plants even in your absence.</p><p><Link to="/selfwateringpots"
                                                                                         className={classNames(styles.transparent_btn, styles.blue)}>Learn
        More</Link></p>
      </li>
    </ul>
    <h4 className={classNames(styles.heading, styles.center)}>Leave it to the experts</h4>
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
</div>