import React from "react";
import styles from './contactus-display.module.css'
import {MdLocationOn} from "react-icons/md";
import {FaEnvelope, FaPhone} from "react-icons/fa";

const Display = () => {
  return <div className={'wrapper display'} style={{textAlign: 'left', paddingLeft: '6vw'}}>
    <h3 className={styles.heading}>CONTACT US</h3>
    <p>As all our solutions are tailored to your specific needs, the best way to understand which solution is right for
      you is to give us a call or send us an email.</p>
    <br/>
    <h4><MdLocationOn/>ADDRESS</h4>
    <div className={styles.paragraph}>
      <h5>Office</h5>
      <address> Tech Mechanica Enterprises<br/>1/61, Kallungal Building,<br/>
        Periyar Nagar, Aluva East,<br/>
        Aluva, Ernakulam Dt., Kerala Pin – 683101
      </address>
      <br/>
      <h5>Works</h5>
      <address>Tech Mechanica Enterprises<br/>
        2/545, Nanadom - Akkarapadam Road,<br/>
        Nanadom, Udayanapuram P.O.<br/>
        Kottayam Dt., Kerala Pin – 686143
      </address>
    </div>
    <h4><FaPhone/> Lets Talk</h4>
    <p className={styles.phone}><a href='tel:+919446605978'>+91 9446605978 </a>
    </p>
    <h4><FaEnvelope/> Write to us</h4>
    <p className={styles.email}>
      <a href='mailto:greeninnovationsinfo@gmail.com'>greeninnovationsinfo@gmail.com</a><br/><br/>
      <a href='mailto:techmechanicaenterprises@gmail.com'>techmechanicaenterprises@gmail.com</a>

    </p>
  </div>
}

export default Display