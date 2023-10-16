import React from 'react'
import './Style/Footerr.css'
import{BsFacebook,BsInstagram,BsTwitter,BsYoutube} from 'react-icons/bs'

const Footerr = () => {
  return (
    <div className='footer'>
        <div className='col-3' id='fo1'>
            <h4>COINFORGE</h4>



        </div>
        <div className='col-6' id='fo2'>
            <h5> © 2023 Powered By COINFORGE , All Rights Reserved.. </h5>

        </div>
        <div className='col-3'>
            <ul className='socialmedia'>
                <li><BsFacebook/></li>
                <li><BsInstagram/></li>
                <li><BsTwitter/></li>
                <li><BsYoutube/></li>
            </ul>

        </div>

    </div>
  )
}

export default Footerr