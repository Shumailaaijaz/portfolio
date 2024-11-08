import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";


const Contact =() => {
    return(
        <div id='Contact' className='pt-32 container'>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'> Get in touch</h2>
                <p className='text-gray-600 text-[20px] pt-2' >
                        Drop me a line, give me a call, or send me a message.
                </p>
                <div className='flex gap-3 items-center' >
                    <CiMail size={30}/> shumailaaijaz359@gmail.com
                </div>
                <div className='flex gap-3 items-center' > 
                    <BsTelephone size={30}/> (03333111567)
                </div>
                </div>
                <div className='space-y-9' >
                    <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className='h-[40px] bg-transparent border border-pink'
                        id='name'/>
                    </div>
                    <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        className='h-[40px] bg-transparent border border-pink'
                        id='email'/>
                    </div>
                      <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                        <label htmlFor="msg">Message</label>
                        <textarea
                        className='bg-transparent border border-pink'
                        id='msg' rows={9}>
                        </textarea>
                      </div>
                    <button className=' bg-pink p-2 px-6' >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact