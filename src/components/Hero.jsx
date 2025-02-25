import {HERO_CONTENT} from "../constants"
import suryanProfile from "../assets/Suryan_Suit.jpeg"


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Suryan Pinnoju</h1>
                    <span
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent leading-[1.3]">AI Engineer</span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter whitespace-pre-line text-2xl">{HERO_CONTENT}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center mt-9">
                    <img className="rounded-xl w-[400px] h-[400px] object-cover"src= {suryanProfile} alt="profile"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero