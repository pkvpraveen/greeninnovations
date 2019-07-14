import React from "react";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './index-display.module.css'

export default () => <div className={'wrapper ' + styles.root}><Carousel/></div>