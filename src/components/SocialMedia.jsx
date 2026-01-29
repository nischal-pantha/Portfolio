import React from 'react'
import { BsTwitter, BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter onClick={() => window.location.href = "https://twitter.com/NischalPantha"} style={{ cursor: "pointer" }} />
      </div>
      <div>
        <FaFacebook onClick={() => window.location.href = "https://www.facebook.com/sabkosaathi.ma"} style={{ cursor: "pointer" }} />
      </div>
      <div>
        <BsInstagram onClick={() => window.location.href = "https://www.instagram.com/aero.nis"} style={{ cursor: "pointer" }} />
      </div>
    </div>
  )
}

export default SocialMedia