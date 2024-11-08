import React from 'react'
import Navbar from './Navbar'



const Hero = () => {
  return (
    <div id= "hero" className="min-h-screen bg-no-repeat bg-[url(/hero-image.png)] bg-left lg:bg-[15%] bg-cover"
     style={{backgroundSize:"35%", backgroundPosition: "left 100px top 100px"}} >
        <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] md:text-[70px] sm:text-[60px]  font-bold leading-tight sm:leading-sung flex justify-center items-center '>
          <div>
             <p data-aos="fade-left">I'm</p>
             <p data-aos="fade-left">Shumaila Aijaz</p>
             <p data-aos="fade-left">Frontend Developer Student of GIAIC</p>
          </div>
        </div>
        <br />
        <div className="btn-box">
            <a
              href="https://shumailaaijazcv.netlify.app/"
              className="btn"
            >
              Download CV
            </a>
            <a
              href="http://www.linkedin.com/in/shumaila-aijaz-916b412b3" target="_blank"
              className="btn"
            >
              Hire Me Now!
            </a>
          </div>
      </div>
    </div>
  
  )
}

export default Hero
