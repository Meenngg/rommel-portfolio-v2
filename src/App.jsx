import Home from "./pages/Home"
import About from "./pages/About"
import { GiHamburgerMenu } from "react-icons/gi"
import Project from "./components/Project"
import Contact from "./components/Contact"
import { useState } from "react"
import { MdOutlineClose } from "react-icons/md"


function App() {
  const [toggleBurger, setToggleBurger] = useState(false);
  const nav = document.querySelector("#navlinks");

  const clickBurger = () => {
    // if(nav.classList.contains('hidden')) {
    //   nav.classList.remove('hidden');
    // }
    // else {
    //   nav.classList.add('hidden');
    // }
  }

  return (
    <>
      <div className="App">

        {/* FIXED NAVIGATION BAR */}
        <div className=" px-3 py-3 bg-secondaryColor shadow-xl fixed top-0 z-50 border-b border-subTextColor w-full md:px-16 md:py-2">
          <div className="navbar flex justify-between items-center" id="navbar">
            <div className="flex items-center justify-between">
              <span className="text-2xl uppercase font-bold tracking-widest cursor-pointer hover:text-primaryColor transition duration-150">
                <a href="#home">Meng.</a>
              </span>
              
            </div>
            <div>           
              <ul className="hidden sm:flex gap-5 items-center cursor-pointer" id="navlinks">
                <li className="hover:text-primaryColor"><a href="#about" className="transition duration-150">About</a></li>
                <li className="hover:text-primaryColor"><a href="#project" className="transition duration-150">Projects</a></li>
                <li className="hover:text-primaryColor"><a href="#contact" className="transition duration-150">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1FjgXq5pNMTDIgdS-vmTvrbLZRAHWSdC4/view?usp=sharing"><button className="btn hover:bg-opacity-95">Resume</button></a></li>
              </ul>
            </div>
            <span className="sm:hidden" onClick={clickBurger}>
              {
                toggleBurger === false ? <GiHamburgerMenu className="icon-btn" size={20}/> : <MdOutlineClose className="icon-btn" size={20}/>
              }       
            </span>
          </div>
        </div>   
        <div className="main-container">
          <section id="home">
            <Home />  
          </section>
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="contact">
            <Contact />
          </section>
          
        </div>
        <footer className="border-t border-subTextColor text-base text-center font-normal py-5">     
            <span>&copy; Rommel Cazeñas 2023</span>
        </footer>
      </div>
    </>
    
  )
}

export default App
