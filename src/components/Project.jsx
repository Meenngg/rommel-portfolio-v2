import { GoBrowser } from "react-icons/go"
import { FiGithub } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"

export const Project = () => {
    return ( 
        <div className="py-2">
            <div className='flex flex-1 flex-col items-center my-5'>
                <h1 className='text-xl uppercase font-semibold'>My Projects</h1>
                <span className=' font-semibold text-subTextColor'>List of my treasured projects</span>
                <hr className='hr-line'/>
            </div>

            <div className="flex gap-5 justify-around flex-wrap"> {/* CARD CONTAINER HERE */}
                <div className="flex flex-col gap-4 bg-subTextColor w-80 rounded-sm py-5 px-2 shadow-xl hover:scale-105 ease-out duration-300">
                    <div className="flex justify-between text-btnHoverColor">
                        <a href="https://cat-fact-rommel.vercel.app"><GoBrowser className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                        <a href="https://github.com/Meenngg/Cat-Fact-v2"><FiGithub className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                    </div>
                    <div className=" bg-project-1 bg-cover h-44 rounded-sm overflow-hidden w-full"></div>
                    <div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-btnHoverColor">Cat Factsss</span>
                            <span className="font-light px-1">Facts Website, API generator</span>
                            <span className="text-sm font-thin px-1 mt-2">Show trivia and facts about cats. This application generates api's using Axios and data fetching.</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs font-light uppercase mt-5">
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">React</span>
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">CSS</span>
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">API</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 bg-subTextColor w-80 rounded-sm py-5 px-2 shadow-xl hover:scale-105 ease-out duration-300">
                    <div className="flex justify-between text-btnHoverColor">
                        <a href="https://stock-market-viewer.vercel.app"><GoBrowser className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                        <a href="https://github.com/Meenngg/stock-market-viewer"><FiGithub className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                    </div>
                    <div className=" bg-project-4 bg-cover h-44 rounded-sm overflow-hidden w-full"></div>
                    <div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-btnHoverColor">Stock Market Viewer </span>
                            <span className="font-light px-1">Stock Market Website, Under Development</span>
                            <span className="text-sm font-thin px-1 mt-2">Display a financial stock market price listed. User can  add, delete and monitor the data stock of eact available financial stock in finnhub API.</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs font-light uppercase mt-5">
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">React</span>
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">tailwindCSS</span>
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">API</span>
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">finnhub</span>
                    </div>
                </div>    

                <div className="flex flex-col gap-4 bg-subTextColor w-80 rounded-sm py-5 px-2 shadow-xl hover:scale-105 ease-out duration-300">
                    <div className="flex justify-between text-btnHoverColor">
                    <a href="https://github.com/Meenngg/rommel-portfolio"><GoBrowser className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                    <a href="https://rommel-cazenas-v1.vercel.app"><FiGithub className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                    </div>
                    <div className=" bg-project-2 bg-cover h-44 rounded-sm overflow-hidden w-full"></div>
                    <div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-btnHoverColor">Rommel Portfolio v1</span>
                            <span className="font-light px-1">Personal Website, Portfolio</span>
                            <span className="text-sm font-thin px-1 mt-2">A self-made website portfolio made in ReactJS and style-components CSS. Created with a simplicity design and uniform colour scheme layout.</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs font-light uppercase mt-5">
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">React</span>
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">Styled components</span>
                    </div>
                </div>  

                <div className="flex flex-col gap-4 bg-subTextColor w-80 rounded-sm py-5 px-2 shadow-xl hover:scale-105 ease-out duration-300">
                    <div className="flex justify-between text-btnHoverColor">
                    <a href="https://rommel-cazenas.vercel.app"><GoBrowser className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                    <a href="https://github.com/Meenngg/rommel-portfolio-v2"><FiGithub className="hover:text-primaryColor cursor-pointer transition ease-in duration-100" size={25} /></a>
                    </div>
                    <div className=" bg-project-3 bg-cover h-44 rounded-sm overflow-hidden w-full"></div>
                    <div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-btnHoverColor">Rommel Portfolio v2</span>
                            <span className="font-light px-1">Personal Website, Portfolio</span>
                            <span className="text-sm font-thin px-1 mt-2">An improved self-made website portfolio of Rommel. Made with React and TailwindCSS to improve visual design.</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-xs font-light uppercase mt-5">
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">React</span>
                        <span className="px-3 p-1 bg-outerTextColor rounded-full">TailwindCSS</span>
                    </div>
                </div>              
            </div>
        </div>
     );
}
 
export default Project;