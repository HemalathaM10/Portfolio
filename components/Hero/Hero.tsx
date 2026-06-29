"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ParticlesContainer } from "./ParticlesContainer";

export const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Three.js Particles Background */}
      <ParticlesContainer />

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 z-10 pointer-events-none">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary to-transparent" />
        </div>

        <div className="z-10 pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
          >
            Hello, I&apos;m <span className="text-primary">Hemalatha M</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-white-100 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 flex items-center gap-2"
          >
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "Backend Developer",
                2000,
                "MCA Student",
                2000,
                "Software Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-secondary font-bold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-white-100 max-w-2xl text-[16px] leading-[30px] font-inter"
          >
            Passionate about learning new technologies and building practical
            software solutions. Ready to contribute to organizational success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#resume"
              className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors duration-300 shadow-lg shadow-primary/30"
            >
              <Download size={20} /> Download Resume
            </a>
            <a
              href="#projects"
              className="glassmorphism text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
            >
              <ExternalLink size={20} /> View Projects
            </a>
            <a
              href="#contact"
              className="border border-secondary text-secondary hover:bg-secondary/10 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors duration-300"
            >
              <Mail size={20} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="https://linkedin.com/in/hemalatha0810"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full glassmorphism flex justify-center items-center hover:scale-110 hover:bg-primary/20 transition-all duration-300 text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/HemalathaM10"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full glassmorphism flex justify-center items-center hover:scale-110 hover:bg-primary/20 transition-all duration-300 text-white"
            >
              <FaGithub size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-auto">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-80 hover:opacity-100 transition-opacity">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
