import React from 'react'
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='mt-16 py-6 text-center bg-pink'>
       <p> &copy;Shumaila Aijaz | All right reserver 2024</p>
       <a href="#hero" className="back-to-top">
                <FaArrowUp />
            </a>
      
    </div>
  )
}

export default Footer
