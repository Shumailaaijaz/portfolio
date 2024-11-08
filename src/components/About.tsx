import React from 'react'
import Heading from './Heading'

const About = () => {
  return (
    <div id='about' className='container pt-32'>
      <Heading title={'About'} />
        <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">About Me</h2>
        <p className='text-gray-500 pt-4' text-justify data-aos="zoom-in-up">I am a dedicated student at GIAIC with a diverse background, holding a master’s degree in social work from Karachi University and a professional foundation in homeopathy. My skills now center on building modern, responsive, and user-centric websites, where I leverage the latest technologies to deliver seamless and efficient web experiences. I am passionate about creating high-quality, functional, and visually appealing applications that meet user needs and enhance online presence.</p>
         
         <p data-aos="fade-up">I want to become a Certified Cloud Native Applied Generative AI Engineer.</p>
        
        
    </div>
    

  )
}

export default About
