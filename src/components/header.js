import {Link} from "gatsby"
import React from "react"
import Logo from './logo'
import {
  FaAddressCard,
  FaBars,
  FaBath,
  FaCaretDown,
  FaDumpsterFire,
  FaHome,
  FaInfoCircle,
  FaLeaf,
  FaNewspaper,
  FaPhone,
  FaRegEnvelope,
  FaSeedling,
  FaUsers,
  FaSync
} from "react-icons/fa";
import {MdPhotoLibrary} from "react-icons/md";
import {GiBeachBucket} from "react-icons/gi";
import headerStyles from './header.module.css';

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


const Header = () => {

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.mastHeader}>
        <div className={headerStyles.logo}>
          <Link to='/'>
            <Logo/>
          </Link>
        </div>
        <div className={headerStyles.getintouch}>
          <p style={{
            color: '#6d92a2',
          }}>Get in touch</p>
          <p><FaPhone size={18} color='#000'/> <a href='tel:+919446605978'>+91 9446605978</a></p>
          <p><FaRegEnvelope size={18} color='#000' style={{marginRight: '2px', marginBottom: '-2px'}}/> <a
            href='mailto:info@greeninnovations.in'>info@greeninnovations.in</a></p>
        </div>
      </div>
      <div>
        <nav>
          <div className={headerStyles.desktopNav + ' wrapper'}>
            <Link className={headerStyles.desktopNavLink} to='/' activeClassName={headerStyles.active}>
              <FaHome/> Home</Link>
            {/* eslint-disable-next-line*/}
            <a className={headerStyles.desktopNavLink + ' ' + headerStyles.dropdown} href='#'>
              <FaSeedling/> Products <FaCaretDown/>
              <div className={headerStyles.dropdownContent}>
                <Link to="/nofuel">No Fuel Incinerator</Link>
                <Link to="/diesel">Diesel Incinerator</Link>
                <Link to="/automatic">Automatic Composting Machines</Link>
                <Link to="/manual">Manual Composting Machines</Link>
                <Link to="/selfwateringpots">Self Watering Pots</Link>
                <Link to="/householdincinerator">HOUSEHOLD Incinerator</Link>
                <Link to="/householdbins">HOUSEHOLD Composting Bins</Link>
              </div>
            </a>
            <Link className={headerStyles.desktopNavLink} to='customers'
                  activeClassName={headerStyles.active}><FaUsers/> Customers</Link>
            <Link className={headerStyles.desktopNavLink} to='/gallery'
                  activeClassName={headerStyles.active}><MdPhotoLibrary/> Gallery</Link>
            <Link className={headerStyles.desktopNavLink} to='/news'
                  activeClassName={headerStyles.active}><FaNewspaper/> News</Link>
            <Link className={headerStyles.desktopNavLink} to='/aboutus' style={{flexShrink: 0}}
                  activeClassName={headerStyles.active}><FaInfoCircle/> About Us</Link>
            <Link className={headerStyles.desktopNavLink} to='/contactus' activeClassName={headerStyles.active}
                  style={{flexShrink: 0}}><FaAddressCard/> Contact Us</Link>
            {/* eslint-disable-next-line*/}
            <a className={headerStyles.navIcon + ' ' + headerStyles.desktopNavLink} onClick={openNav} href='#'>
              {/*<FaAngleDoubleRight/>*/}
              <FaBars/>
            </a>
          </div>
          <div id="mySidenav" className={headerStyles.sidenav}>
            {/* eslint-disable-next-line*/}
            <a href="#" className={headerStyles.closebtn} onClick={closeNav}>&times;</a>
            <Link to='/'><FaHome/> Home</Link>
            {/* eslint-disable-next-line*/}
            <a><FaSeedling/> Products</a>
            <div className={headerStyles.sublist}>
              <Link onClick={closeNav} to='/nofuel'><FaLeaf/> No Fuel Incinerator </Link>
              <Link onClick={closeNav} to='/diesel'><FaDumpsterFire/> Diesel Incinerator </Link>
              <Link onClick={closeNav} to="/automatic"><FaSync/> Automatic Composting Machines</Link>
              <Link onClick={closeNav} to="/manual"><GiBeachBucket/> Manual Composting Machines</Link>
              <Link onClick={closeNav} to="/selfwateringpots"><FaBath/> Self Watering Pots</Link>
              <Link onClick={closeNav} to="/householdincinerator"><FaHome/> HOUSEHOLD Incinerator</Link>
              <Link onClick={closeNav} to="/householdbins"><FaHome/> HOUSEHOLD Composting Bins</Link>
            </div>
            <Link onClick={closeNav} to='customers'><FaUsers/> Customers</Link>
            <Link onClick={closeNav} to='/gallery'><MdPhotoLibrary/> Gallery</Link>
            <Link onClick={closeNav} to='/news'><FaNewspaper/> News</Link>
            <Link onClick={closeNav} to='/aboutus'><FaInfoCircle/> About Us</Link>
            <Link onClick={closeNav} to='/contactus'><FaAddressCard/> Contact Us</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}


export default Header
