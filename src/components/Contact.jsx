import { FiMail, FiGithub, FiFacebook } from "react-icons/fi"
import { FaFacebookMessenger } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"

export const Contact = () => {
    return ( 
        <div className="py-2 my-24 flex flex-col justify-center text-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-2xl md:text-5xl text-primaryColor font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-textGradient">Let's jump on a quick talk!</h1>
                <span className="w-11/12 text-md md:text-lg">A fresh graduate student that you can <a href="https://m.me/rommel.diana.cazenas"><span className=" text-yellow-300 underline cursor-pointer">hire</span></a> and drop me a message to say hello &#128521;</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-8">
                <div>
                    <div className="border-2 border-primaryColor py-3 px-7 text-md md:text-xl uppercase font-semibold rounded-sm hover:bg-subTextColor cursor-pointer">
                        <a className="flex items-center gap-2" href="https://www.facebook.com/rommel.diana.cazenas">
                            <span>Dm me</span>
                            <FiMail className="inline" size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5">
                    <hr className="border-1 border-subTextColor w-16" />
                    <span> or </span>
                    <hr className="border-1 border-subTextColor w-16" />
                </div>

                <div className="flex gap-5">
                    <a href="https://github.com/Meenngg"><button className="border border-subTextColor py-1 px-2 rounded-sm shadow-sm transition ease-out duration-150 hover:text-primaryColor hover:border-primaryColor hover:bg-linearBtnColor"><FiGithub size={20} /></button></a>
                    <a href="https://www.linkedin.com/in/rommel-caze%C3%B1as/"><button className="border border-subTextColor py-1 px-2 rounded-sm shadow-sm transition ease-out duration-150 hover:text-primaryColor hover:border-primaryColor hover:bg-linearBtnColor"><AiFillLinkedin size={20} /></button></a>
                    <a href="https://www.facebook.com/rommel.diana.cazenas"><button className="border border-subTextColor py-1 px-2 rounded-sm shadow-sm transition ease-out duration-150 hover:text-primaryColor hover:border-primaryColor hover:bg-linearBtnColor"><FiFacebook size={20} /></button></a>
                    <a href="https://m.me/rommel.diana.cazenas"><button className="border border-subTextColor py-1 px-2 rounded-sm shadow-sm transition ease-out duration-150 hover:text-primaryColor hover:border-primaryColor hover:bg-linearBtnColor"><FaFacebookMessenger size={20} /></button></a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;