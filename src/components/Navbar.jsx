
import { FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Sidebar from "./sidebar/Sidebar";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const tooltipVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div id="Home" className="flex items-center justify-between py-6">
      <Sidebar />
        <div className="m-8 flex items-center justify-center gap-8 text-2xl">
          <div className="relative group">
            <a
              href="/resume.pdf"
              download="Suryan_Pinnoju_Resume.pdf"
              className="relative flex items-center justify-center cursor-pointer"
            >
              <FaDownload
                className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4"
              />
            </a>
            
            {/* Tooltip Text */}
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-300 bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded shadow-sm cursor-pointer"
            >
              Resume
            </span>
          </div>
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/suryan-pinnoju-7ba258288/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center cursor-pointer"
            >
            <FaLinkedin
              className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4"
            />
            </a>
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-300 bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded shadow-sm cursor-pointer"
            >
            LinkedIn
            </span>
          </div>
          <div className="relative group">
            <a
              href="https://leetcode.com/u/suryanpinnoju/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center cursor-pointer"
            >
            <SiLeetcode
              className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4"
            />
            </a>
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-300 bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded shadow-sm cursor-pointer"
            >
            Leetcode
            </span>
          </div>
          <div className="relative group">
            <a
              href="https://github.com/nottherealhuman69"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center cursor-pointer"
            >
            <FaGithub
              className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4"
            />
            </a>
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-300 bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded shadow-sm cursor-pointer"
            >
            Github
            </span>
          </div>
        </div>
    </div>
  );
};

export default Navbar