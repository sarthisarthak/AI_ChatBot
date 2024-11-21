import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full p-4 mt-10 border-t bg-primary text-white border-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-sm mb-2 md:mb-0 text-white text-xl">
          Made by Sarthak Sarthi
        </span>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sarthaksarthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400 transition-colors text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/sarthaksarthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors text-white"
          >
            <img src="leetcode.png" alt="LeetCode" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/sarthisarthak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400 transition-colors text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
