import React from 'react'
import "./footer.css"
import {BsWhatsapp} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import "./home.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer2 container'>
        <div className='topp'>
          <div className='panner'>
          <img src='https://orientspark.com/site/images/logo1.png' style={{width:"150px" ,height:"100px"}}/>
          </div>
        <div className='ibcv'>
        <BsWhatsapp className='icoo'  />
          <AiFillInstagram className='icoo'/>
          <FaTwitter className='icoo'  />
          <FaFacebookF className='icoo'/>
        </div>
         <div className='tet'>
         <p>سياسه الاستخدام</p>
          <p>من نحن</p>
          <p>تواصل معنا</p>
          <p>العروض</p>
          <p>الرئيسية</p>
         </div>
        </div>
        <hr className='hr3'></hr>
        <div className='bootom'>
          <p><span style={{color: "#c39209"}}>ORIENT SPARK</span>جميع الحقوق محفوظه النشر ل</p>
          <h4><span style={{color:"white"}}>Puresoft</span>تطوير بواسطه </h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
