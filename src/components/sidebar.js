import {elastic as Menu} from 'react-burger-menu'
import {Link} from "gatsby";
import React from "react";
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

const SideBar = () => {

  return (
    <Menu>
      <Link to='/'><FaHome/> Home</Link>
      <Link to='/products'><FaSeedling/> Products</Link>
      <Link to='customers'><FaUsers/> Customers</Link>
      <Link to='/gallery'><MdPhotoLibrary/> Gallery</Link>
      <Link to='/news'><FaNewspaper/> News</Link>
      <Link to='/aboutus'><FaInfoCircle/> About</Link>
      <Link to='/contactus'><FaAddressCard/> Contact</Link>
    </Menu>
  );
}

export default SideBar