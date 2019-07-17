import React from "react";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './index-display.module.css'
import {Link} from "gatsby"

export default () => <div className={'wrapper ' + styles.root}>
  <Carousel/>
  <div className={styles.buttonContainer}>
    <a href='#aboutus' className={styles.button}> Learn More</a>
  </div>
</div>