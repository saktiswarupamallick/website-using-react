import React from 'react'
import ReactWhatsapp from "react-whatsapp";
import {whatsapp} from "../assets";
import "./chat.css"

const chat = () => {
  return (
    <div className='maintargetcontainer'>
        <a className='chat' href="https://wa.me/918917414252" target='_blank'>
          <img  src={whatsapp} alt="whatsapp" className="w-[90%] relative z-[5] " />
          </a>
    </div>
  )
}

export default chat