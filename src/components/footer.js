import React from 'react'
import classes from './footer.module.css'

const Footer = (props) => (
  <footer className={classes.footer}>
    <div className={'wrapper ' + classes.footerContent}>
      <section>
        <h2>Links</h2>
        <p>
          <ul>
            <li><a href='#'> No Fuel or Fuel Free Incinerator</a></li>
            <li><a href='#'> Diesel Incinerator</a></li>
            <li><a href='#'> Napkin Incinerator</a></li>
            <li><a href='#'> Automatic Composting Machine</a></li>
            <li><a href='#'> Manual Composting Machine</a></li>
            <li><a href='#'> Organic Waste Converters</a></li>
            <li><a href='#'> Waste Shredders</a></li>
            <li><a href='#'> Waste Dewatering Systems</a></li>
            <li><a href='#'> Bio Gas Plant</a></li>
            <li><a href='#'> Composting Bins</a></li>
            <li><a href='#'> Self-Watering Pots</a></li>
            <li><a href='#'> Vertical Gardens</a></li>
          </ul>
        </p>
      </section>
      <section>
        <h2>Tech Mechanica Enterprises</h2>
        <dl className="alt">
          <dt>Office</dt>
          <dd>1/61 &bull; Kallungal Building &bull; Periyar Nagar<br/> &bull; Aluva East &bull; Aluva &bull; Ernakulam
            Dt. &bull; Kerala Pin – 683101
          </dd>
          <dt>Works</dt>
          <dd>2/545 &bull; Nanadom - Akkarapadam Road &bull; Nanadom <br/>&bull; Udayanapuram P.O. &bull; Kottayam
            Dt. <br/>&bull; Kerala Pin – 686143
          </dd>
          <dt>Phone</dt>
          <dd><a href='tel:+919446605978'> +91 9446605978</a></dd>
          <dt>Email</dt>
          <dd><a href="mailto:greeninnovationsinfo@gmail.com">greeninnovationsinfo@gmail.com</a></dd>
          <dd><a href="mailto:techmechanicaenterprises@gmail.com">techmechanicaenterprises@gmail.com</a></dd>
        </dl>
      </section>
    </div>
    <p className={classes.copyright}>&copy; Tech Mechanica Enterprises 2018.</p>
  </footer>
)

export default Footer
