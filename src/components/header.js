import {Link} from "gatsby"
import React from "react"
import Logo from './logo'

const Header = () => (
  <header
    className='wrapper header'
  >
    <div className='logo'>
      <Link to='/'>
        <Logo/>
      </Link>
    </div>

    <div className='caption'>
      <p>THE ART OF SUSTAINABLE LIVING</p>
    </div>
    <div className='getintouch'>
      <p style={{
        color: '#6d92a2',
      }}>Get in touch</p>
      <p><a href='tel:+919446605978'>+91 9446605978</a></p>
      <p><a href='mailto:info@greeninnovations.in'>info@greeninnovations.in</a></p>
    </div>

  </header>
)


export default Header
