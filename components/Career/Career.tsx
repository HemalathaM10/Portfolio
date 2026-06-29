"use client";

import { motion } from "framer-motion";
import { SectionWrapper, textVariant, fadeIn } from "../SectionWrapper";
import { BookOpen, FolderGit2, Laptop, Trophy, ArrowRight } from "lucide-react";

const roadmap = [
  { step: "Learning", icon: <BookOpen size={24} />, desc: "Acquiring core skills" },
  { step: "Projects", icon: <FolderGit2 size={24} />, desc: "Building practical apps" },
  { step: "Internship", icon: <Laptop size={24} />, desc: "Gaining industry exp" },
  { step: "SDE", icon: <Trophy size={24} />, desc: "Software Dev Engineer" },
];

export const Career = () => {
  return (
    <SectionWrapper idName="career">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          Future Path
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Career Objective.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="flex-1"
        >
          <div className="glassmorphism p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full blur-2xl" />
            <h3 className="text-[24px] font-bold text-white mb-4 font-poppins">
              My Goal
            </h3>
            <p className="text-white-100 text-[17px] leading-[30px] font-inter">
              To secure a position as a Software Development Engineer where I can
              leverage my programming skills, database knowledge, and continuous
              learning mindset to build innovative software solutions. I aim to grow
              professionally by solving real-world challenges and contributing to
              the success of a dynamic engineering team.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="flex-1 w-full"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center relative">
            {/* Connecting Line for desktop */}
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0" />
            
            {/* Connecting Line for mobile */}
            <div className="sm:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-white/10 -translate-x-1/2 z-0" />

            {roadmap.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 my-4 sm:my-0 group">
                <div className={`w-16 h-16 rounded-full glassmorphism flex items-center justify-center text-white border-2 border-transparent group-hover:border-secondary transition-all duration-300 ${index === roadmap.length -1 ? 'bg-primary/50' : 'bg-black-100'}`}>
                  {item.icon}
                </div>
                <div className="mt-4 text-center glassmorphism px-4 py-2 rounded-xl">
                  <h4 className="text-white font-bold text-[16px]">{item.step}</h4>
                  <p className="text-secondary text-[12px]">{item.desc}</p>
                </div>
                {index !== roadmap.length - 1 && (
                  <ArrowRight size={20} className="text-white/30 hidden sm:block absolute -right-12 top-1/2 -translate-y-1/2 -mt-7" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
