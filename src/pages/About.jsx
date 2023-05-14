import React, { useState } from 'react'
import ProfilePic from "../assets/Grad_Profile.png"
import { RiProfileFill, RiCodeSSlashFill, RiBook2Fill } from "react-icons/ri"
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiStyledcomponents, SiFirebase, SiMysql, SiFigma, SiGit, SiGithub  } from "react-icons/si"
import { GiWhiteBook } from "react-icons/gi"
import SkillTab from '../components/SkillTab';

function About() {
    const [toggleBtn, setToggleBtn] = useState(1);

  return (
    <div className='py-2 mb-24'>
        <div className='flex flex-1 flex-col items-center my-5'>
            <h1 className='text-xl uppercase font-semibold'>Something about me</h1>
            <span className=' font-semibold text-subTextColor'>Things that describe me and who am I</span>
            <hr className='hr-line'/>
        </div>
        <div className='grid justify-center gap-5 md:grid-cols-5 md:gap-1'>
            <div className='flex items-start overflow-hidden md:mx-0 md:col-span-2'>
                
                    <img src={ProfilePic} alt="Rommel Cazeñas" className='image border-4 border-primaryColor w-56 md:w-11/12 mx-auto' />
                
            </div>
            <div className='flex flex-col md:col-span-3'>
                <div className='grid grid-cols-3 gap-2 justify-between'>
                    <section className='flex flex-col items-center bg-primaryColor rounded-sm px-10 py-5 transition ease-in duration-200 hover:bg-btnHoverColor cursor-pointer' onClick={() => setToggleBtn(prev => 1)}>
                        <RiProfileFill size={20} className='text-textColor transition ease-in duration-200' />
                        <span className='text-xs font-semibold'>Me</span>
                    </section>
                    <section className='flex flex-col items-center bg-primaryColor rounded-sm px-10 py-5 transition ease-in duration-200 hover:bg-btnHoverColor cursor-pointer' onClick={() => setToggleBtn(prev => 2)}>
                        <RiCodeSSlashFill size={20} className='text-textColor transition ease-in duration-200' />
                        <span className='text-xs font-semibold'>Skills</span>
                    </section>
                    <section className='flex flex-col items-center bg-primaryColor rounded-sm px-10 py-5 transition ease-in duration-200 hover:bg-btnHoverColor cursor-pointer' onClick={() => setToggleBtn(prev => 3)}>
                        <RiBook2Fill size={20} className='text-textColor transition ease-in duration-200' />
                        <span className='text-xs font-semibold'>Education</span>
                    </section>
                </div>
                <div className=' mt-2 mb-10 ove'>
                    <div className={`${toggleBtn === 1 ? 'show' : 'hidden'}`}>
                        <div className='w-full text-xl text-center text-textColor font-semibold my-2 mb-5 uppercase'>
                            <span>What I do</span>
                            <span><hr className='hr-line mx-auto'/></span>
                        </div>
                        <p className='text-center'>Hi! I'm <span className='text-2xl text-primaryColor font-semibold'>Meng</span>&#128513;. I love designing and creating application through ReactJS. I also opened my eyes	&#129488; in back-end development which gives me excitement &#128525;. </p>
                        <p className='text-center pt-2'>Im into gaming also with a genre of MMORPG and MOBA 🎮. Playing is fun and better if I play with my teamates with hardworks &#128170;.
                        </p>
                    </div>
                    <div className={`${toggleBtn === 2 ? 'show' : 'hidden'}`}>
                        <div className='w-full text-xl text-center text-textColor font-semibold my-2 mb-5 uppercase'>
                            <span>Technology stack I used</span>
                            <span><hr className='hr-line mx-auto'/></span>
                        </div>
                        <div className='flex flex-wrap gap-3 text-sm font-semibold lg:grid lg:grid-cols-4'>
                            <SkillTab logoName={<SiJavascript size={20} color="#efd81d" />} stack="JavaScript" />
                            <SkillTab logoName={<SiReact size={20} color="#00cdf2" />} stack="ReactJS" />
                            <SkillTab logoName={<SiHtml5 size={20} color="#f25320" />} stack="HTML5" />
                            <SkillTab logoName={<SiCss3 size={20} color="#f25320" />} stack="CSS3" />
                            <SkillTab logoName={<SiTailwindcss size={20} color="#35b3eb" />} stack="Tailwind" />
                            <SkillTab logoName={<SiStyledcomponents size={20} color="#d2698b" />} stack="Styled" />
                            <SkillTab logoName={<SiFirebase size={20} color="#f2c201" />} stack="Firebase" />
                            <SkillTab logoName={<SiMysql size={20} color="#005c83" />} stack="MySQL" />
                            <SkillTab logoName={<SiFigma size={20} color="#9a54f2" />} stack="Figma" />
                            <SkillTab logoName={<SiGit size={20} color="#f05033" />} stack="Git" />
                            <SkillTab logoName={<SiGithub size={20} color="#f2f2f2" />} stack="Github" />
                        </div>
                    </div>
                    <div className={`${toggleBtn === 3 ? 'show' : 'hidden'}`}>
                        <div className='w-full text-xl text-center text-textColor font-semibold my-2 mb-5 uppercase'>
                            <span>My education history</span>
                            <span><hr className='hr-line mx-auto'/></span>
                        </div>
                        <div className='grid grid-cols-5 gap-2 mt-2 mb-5'>
                            <div className='cols-span-1 flex justify-center items-center'><GiWhiteBook size={20} /></div>
                            <div className='col-span-4'>
                                <span className='text-xs'>College Graduate from Cavite State University - Silang with a degree of Bachelor of Science in Information Technology (2018 - 2023)</span>
                            </div>
                        </div>
                        <hr className='bg-transparent border-b border-subTextColor'/>
                        <div className='grid grid-cols-5 gap-2 mt-2 mb-5'>
                            <div className='cols-span-1 flex justify-center items-center'><GiWhiteBook size={20} /></div>
                            <div className='col-span-4'>
                                <span className='text-xs'>Senior Highschool Graduate from STI College Dasmariñas - ICT in mobile app and web development (2016 - 2018)</span>
                            </div>
                        </div>
                        <hr className='bg-transparent border-b border-subTextColor'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About