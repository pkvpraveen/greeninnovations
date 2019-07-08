import {Link} from "gatsby"
import React from "react"
import Logo from './logo'
import {FaEnvelope, FaPhone} from "react-icons/fa";

const Header = () => (
  <header>
    <div className='wrapper header'>
      <div className='logo'>
        <Link to='/'>
          <Logo/>
        </Link>
      </div>
      <div className='getintouch'>
        <p style={{
          color: '#6d92a2',
        }}>Get in touch</p>
        <p><FaPhone size={18} color='#000'/><a href='tel:+919446605978'>+91 9446605978</a></p>
        <p><FaEnvelope size={18} color='#000' style={{marginRight: '2px', marginBottom: '-2px'}}/><a
          href='mailto:info@greeninnovations.in'>info@greeninnovations.in</a></p>
      </div>
    </div>

  </header>
)


export default Header
