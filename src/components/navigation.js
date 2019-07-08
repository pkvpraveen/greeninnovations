import React from "react"
import {FaAddressCard, FaBars, FaHome, FaInfoCircle, FaNewspaper, FaPhone, FaSeedling, FaUsers} from "react-icons/fa";
import {MdPhotoLibrary} from "react-icons/md";


const Navigation = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "40%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
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
  )
}

export default Navigation
