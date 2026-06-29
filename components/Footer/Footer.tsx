"use client";

import { ChevronUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full relative z-10 glassmorphism border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center md:items-start">
          <p className="text-white text-[24px] font-bold font-poppins">
            Hemalatha M
          </p>
          <p className="text-white-100 text-[14px] mt-2 font-inter italic text-center md:text-left">
            "Code. Learn. Improve. Repeat."
          </p>
        </div>

        <ul className="flex gap-6 text-white-100 font-inter text-[14px]">
          <li className="hover:text-secondary cursor-pointer transition-colors"><a href="#home">Home</a></li>
          <li className="hover:text-secondary cursor-pointer transition-colors"><a href="#about">About</a></li>
          <li className="hover:text-secondary cursor-pointer transition-colors"><a href="#projects">Projects</a></li>
          <li className="hover:text-secondary cursor-pointer transition-colors"><a href="#contact">Contact</a></li>
        </ul>

        <div className="flex gap-4">
          <a href="https://linkedin.com/in/hemalatha0810" target="_blank" rel="noreferrer" className="text-white-100 hover:text-white hover:-translate-y-1 transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/HemalathaM10" target="_blank" rel="noreferrer" className="text-white-100 hover:text-white hover:-translate-y-1 transition-all">
            <FaGithub size={20} />
          </a>
          <a href="#contact" className="text-white-100 hover:text-white hover:-translate-y-1 transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto sm:px-16 px-6 gap-4">
        <p className="text-white-100 text-[14px] font-inter">
          &copy; {new Date().getFullYear()} Hemalatha M. All rights reserved.
        </p>

        <a
          href="#home"
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary flex justify-center items-center text-white transition-all shadow-md"
        >
          <ChevronUp size={20} />
        </a>
      </div>
    </footer>
  );
};
