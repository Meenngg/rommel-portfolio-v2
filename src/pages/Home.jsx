import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa"

function Home() {
  return (
    <div className='h-screen flex flex-col justify-center py-2'>
        <div>
            <div>
                <span className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-textGradient lg:text-7xl'>Rommel Cazeñas</span>
            </div>
            <div>
                <span className='text-xl font-semibold lg:text-3xl'>I'm aspring Software Developer <span>&#128075;	
                &#129302;</span></span>
            </div>
            <div className='flex flex-col justify-between gap-10 my-5'>
                <span className='text-sm sm:w-4/5 lg:w-2/4'>You can also call me Meng (as my nickname). I am passionate in creating web application and eager to learn new things about web developement.</span>
                <div className='flex gap-3 items-center'>
                    <div className='pr-5 border-r border-subTextColor'>
                        <a href="https://m.me/rommel.diana.cazenas"><button className='btn text-textColor'>Check me</button></a>
                    </div>
                    <div className='flex gap-7'>
                        <a href="https://www.facebook.com/rommel.diana.cazenas"><span><FaFacebookF className='icon-btn' size={20}/></span></a>
                        <a href="https://www.linkedin.com/in/rommel-caze%C3%B1as/"><span><FaLinkedinIn className='icon-btn' size={20}/></span></a>
                        <a href="https://github.com/Meenngg"><span><FaGithub className='icon-btn' size={20}/></span></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home