import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {useState} from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-9'>
        <div className='flex items-center justify-between'>
            <div className='text-xl font-medium'>  SA Shumaila Aijaz</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#Skills'>Skills</a></li>
                <li className='menuLink'><a href='#Contact'>Contact</a></li>
            </ul>
            <div className='md:hidden' onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={30} />:
              <AiOutlineMenu size={30} />
              }
            </div>
        </div>
        {isMenuOpen && (
         <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className='menuLink'>
            <a href='#hero' onClick={toggleMenu}>Home</a>
          </li>
          <li className='menuLink'>
            <a href='#about' onClick={toggleMenu}>About</a>
          </li>
          <li className='menuLink'>
            <a href='#Projects' onClick={toggleMenu}>Projects</a>
          </li>
          <li className='menuLink'>
            <a href='#contact' onClick={toggleMenu}>Contact</a>
          </li>
         </ul>
        )
      }
    </div>
  )
}

export default Navbar

