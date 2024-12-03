import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div id="Technologies" className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {[
          { Icon: RiReactjsLine, name: "React.js", color: "text-cyan-400" },
          { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
          { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
          { Icon: SiTensorflow, name: "TensorFlow", color: "text-orange-400" },
          { Icon: FaPython, name: "Python", color: "text-yellow-500" },
          { Icon: SiCplusplus, name: "C++", color: "text-sky-700" },
          { Icon: SiFlask, name: "Flask", color: "text-red-600" },
        ].map(({ Icon, name, color }) => (
          <motion.div
            key={name}
            className="w-32 h-32 rounded-2xl border-4 border-neutral-800 group overflow-hidden flex items-center justify-center"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            {/* Icon (default state) */}
            <div
              className={`flex items-center justify-center text-7xl ${color} group-hover:hidden`}
            >
              <Icon />
            </div>

            {/* Text (hover state) */}
            <motion.div
              className="hidden group-hover:flex items-center justify-center text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient font-cool"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;