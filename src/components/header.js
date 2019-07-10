import {Link} from "gatsby"
import React from "react"
import Logo from './logo'
import {
  FaAddressCard, FaBars,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaPhone,
  FaSeedling,
  FaUsers
} from "react-icons/fa";
import {MdPhotoLibrary} from "react-icons/md";
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
const Header = () => (
  <header className='header wrapper'>
    <div className='logo'>
      <Link to='/'>
        <Logo/>
      </Link>
    </div>
      <nav>
        <ul className='wrapper'>
          <li><FaHome/><br/> Home</li>
          <li><FaSeedling/> <br/>Products</li>
          <li><FaUsers/><br/> Customers</li>
          <li><MdPhotoLibrary/><br/> Gallery</li>
          <li><FaNewspaper/><br/> News</li>
          <li style={{flexShrink: 0}}><FaInfoCircle/><br/> About Us</li>
          <li style={{flexShrink: 0}}><FaAddressCard/><br/> Contact Us</li>
          <li className='nav-icon' onClick={openNav}>
            <FaBars/>
          </li>
        </ul>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#" onClick={closeNav}><FaHome/> Home</a>
          <a href="#" onClick={closeNav}><FaSeedling/> Products</a>
          <a href="#" onClick={closeNav}><FaUsers/> Customers</a>
          <a href="#" onClick={closeNav}><MdPhotoLibrary/> Gallery</a>
          <a href="#" onClick={closeNav}><FaNewspaper/> News</a>
          <a href="#" onClick={closeNav}><FaInfoCircle/> About</a>
          <a href="#" onClick={closeNav}><FaAddressCard/> Contact</a>
        </div>
      </nav>
  </header>
)


export default Header
