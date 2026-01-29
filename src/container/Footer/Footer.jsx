import React from 'react'
import { images } from '../../constants'
import { AppWrap } from "../../wrapper"
// import client from "../../client"

import "./Footer.scss"
const Footer = () => {

  return (
    <>
      <h2 className='head-text'>Connect with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:com.nischal.pantha@yahoo.com' className='p-text'>com.nischal.pantha@yahoo.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href='tel:+977 9762861220 +1 2512318193' className='p-text'>+977 9762861220 +1 2512318193</a>
        </div>
      </div>

    </>
  )
}

export default AppWrap(Footer, "footer")