import {Link} from "gatsby"
import React from "react"
import Logo from './logo'
import {FaAddressCard, FaBars, FaHome, FaInfoCircle, FaNewspaper, FaSeedling, FaUsers} from "react-icons/fa";
import {MdPhotoLibrary} from "react-icons/md";
import headerStyles from './header.module.css';

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


const Header = () => {

  return (
    <header className={headerStyles.header + ' wrapper'}>
      <div className={headerStyles.logo}>
        <Link to='/'>
          <Logo/>
        </Link>
      </div>
      <nav>
        <div className={headerStyles.desktopNav + ' wrapper'}>
          <Link className={headerStyles.desktopNavLink} to='/' activeClassName={headerStyles.active}>
            <FaHome/><br/> Home</Link>
          <Link className={headerStyles.desktopNavLink} to='/products'
                activeClassName={headerStyles.active}><FaSeedling/>
            <br/>Products</Link>
          <Link className={headerStyles.desktopNavLink} to='customers'
                activeClassName={headerStyles.active}><FaUsers/><br/> Customers</Link>
          <Link className={headerStyles.desktopNavLink} to='/gallery'
                activeClassName={headerStyles.active}><MdPhotoLibrary/><br/> Gallery</Link>
          <Link className={headerStyles.desktopNavLink} to='/news'
                activeClassName={headerStyles.active}><FaNewspaper/><br/> News</Link>
          <Link className={headerStyles.desktopNavLink} to='/aboutus' style={{flexShrink: 0}}
                activeClassName={headerStyles.active}><FaInfoCircle/><br/> About Us</Link>
          <Link className={headerStyles.desktopNavLink} to='/contactus' activeClassName={headerStyles.active}
                style={{flexShrink: 0}}><FaAddressCard/><br/> Contact Us</Link>
          <a className={headerStyles.navIcon + ' ' + headerStyles.desktopNavLink} onClick={openNav}>
            <FaBars/>
          </a>
        </div>
        <div id="mySidenav" className={headerStyles.sidenav}>
          <a href="javascript:void(0)" className={headerStyles.closebtn} onClick={closeNav}>&times;</a>
          <Link to='/'><FaHome/> Home</Link>
          <Link onClick={closeNav} to='/products'><FaSeedling/> Products</Link>
          <Link onClick={closeNav} to='customers'><FaUsers/> Customers</Link>
          <Link onClick={closeNav} to='/gallery'><MdPhotoLibrary/> Gallery</Link>
          <Link onClick={closeNav} to='/news'><FaNewspaper/> News</Link>
          <Link onClick={closeNav} to='/aboutus'><FaInfoCircle/> About Us</Link>
          <Link onClick={closeNav} to='/contactus'><FaAddressCard/> Contact Us</Link>
        </div>
      </nav>
    </header>
  )
}


export default Header
