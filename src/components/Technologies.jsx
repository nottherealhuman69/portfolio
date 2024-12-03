
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { SiCplusplus } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { SiTensorflow } from "react-icons/si"
import { SiFlask } from "react-icons/si"

const Technologies = () => {
  return (
    <div id="Technologies" className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTensorflow className="text-7xl text-orange-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-sky-700"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFlask className="text-7xl"/>
          </div>
        </div>
    </div>
  )
}

export default Technologies