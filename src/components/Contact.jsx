import { FiMail } from "react-icons/fi"

export const Contact = () => {
    return ( 
        <div className="py-2 h-screen flex flex-col justify-center text-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-5xl text-primaryColor font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-textGradient">Let's jump on a quick talk!</h1>
                <span className="w-11/12 text-lg">Ask me any question you might have or drop me a message and say hello &#128521;</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-8">
                <div>
                    <div className="border-2 border-primaryColor py-3 px-7 text-xl uppercase font-bold rounded-sm">
                        <a className="flex items-center gap-2" href="https://www.facebook.com/rommel.diana.cazenas">
                            <span>Dm me</span>
                            <FiMail className="inline" size={20} />
                        </a>
                    </div>
                </div>
                <div>
                    <button>
                        
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;