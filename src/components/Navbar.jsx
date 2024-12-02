
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="Home" className="flex items-center justify-between py-6">
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/suryan-pinnoju-7ba258288/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://leetcode.com/u/suryanpinnoju/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a href="https://github.com/nottherealhuman69" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
    </div>
  );
};

export default Navbar