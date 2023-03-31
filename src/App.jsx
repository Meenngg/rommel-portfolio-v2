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
    setToggleBurger(!toggleBurger);
    // console.log(toggleBurger);
    const list = document.querySelector('ul');
    toggleBurger === false ? (list.classList.add('top-[120]'), list.classList.add('opacity-100')) : (list.classList.remove('top-[120]'), list.classList.remove('opacity-100'))
  }

  return (
    <>
      <div className="App">

      {/* FIXED NAVIGATION BAR */}
      <div className="px-3 py-3 bg-secondaryColor shadow-xl fixed top-0 z-50 border-b border-subTextColor w-full md:px-16 md:py-2">
          <div className="md:flex md:justify-between items-center md:px-16"> {/* NAVIGATION BAR START HERE */}
            {/* NAVIGATION HEADER/LOGO HERE */}
            <div className="flex items-center justify-between">
              <span className="text-2xl uppercase font-bold tracking-widest cursor-pointer hover:text-primaryColor transition duration-150">
                <a href="#home">Meng.</a>
              </span>          

              {/* NAVIGATION BURGER HERE */}
              <span className="md:hidden block cursor-pointer transition-all ease-in-out duration-300" onClick={clickBurger}>
                  {
                    toggleBurger === false ? <GiHamburgerMenu className="icon-btn" size={20}/> : <MdOutlineClose className="icon-btn" size={25}/>
                  }       
                </span>
            </div>

            {/* NAVIGATION LINKS HERE */}          
              <ul className="left-0 my-0 pt-2 md:pt-0 pb-2 md:my-0 md:pb-0 z-[1] bg-secondaryColor border-b border-subTextColor md:border-none flex flex-col md:flex-row items-center gap-3 md:gap-5 md:z-auto md:static absolute w-full md:w-auto opacity-0 md:opacity-100 top-[-500] transition-all ease-in duration-400" onClick={clickBurger}> 
                <li className="hover:text-primaryColor"><a href="#about" className="transition duration-150">About</a></li>
                <li className="hover:text-primaryColor"><a href="#project" className="transition duration-150">Projects</a></li>
                <li className="hover:text-primaryColor"><a href="#contact" className="transition duration-150">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1FjgXq5pNMTDIgdS-vmTvrbLZRAHWSdC4/view?usp=sharing"><button className="btn hover:bg-opacity-95">Resume</button></a></li>
              </ul>
          </div>
        </div>
  
        {/* MAIN CONTAINER STARTS HERE */}
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

        {/* FOOTER HERE */}
        <footer className="border-t border-subTextColor text-base text-center font-normal py-5">     
            <span>&copy; Rommel Cazeñas 2023</span>
        </footer>
      </div>
    </>
    
  )
}

export default App
