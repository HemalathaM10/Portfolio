"use client";

import { motion } from "framer-motion";
import { SectionWrapper, textVariant, fadeIn } from "../SectionWrapper";
import { Coffee, FileCode2, Paintbrush, Database, Server, Code2, Calculator, Keyboard } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 85, icon: <Coffee size={24} />, color: "text-primary", bg: "bg-primary" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90, icon: <FileCode2 size={24} />, color: "text-orange-500", bg: "bg-orange-500" },
      { name: "CSS", level: 85, icon: <Paintbrush size={24} />, color: "text-blue-500", bg: "bg-blue-500" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", level: 80, icon: <Database size={24} />, color: "text-secondary", bg: "bg-secondary" },
      { name: "Oracle Database", level: 75, icon: <Server size={24} />, color: "text-red-500", bg: "bg-red-500" },
    ]
  },
  {
    title: "Tools & Additional",
    skills: [
      { name: "VS Code", level: 90, icon: <Code2 size={24} />, color: "text-blue-400", bg: "bg-blue-400" },
      { name: "Tally with GST", level: 70, icon: <Calculator size={24} />, color: "text-yellow-500", bg: "bg-yellow-500" },
      { name: "English Typewriting", level: 95, icon: <Keyboard size={24} />, color: "text-accent", bg: "bg-accent" },
    ]
  }
];

export const Skills = () => {
  return (
    <SectionWrapper idName="skills">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          My Technical Expertise
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Skills.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="glassmorphism p-6 rounded-2xl"
          >
            <h3 className="text-white text-[24px] font-bold font-poppins mb-6 border-b border-white/10 pb-2">
              {category.title}
            </h3>
            
            <div className="flex flex-col gap-6">
              {category.skills.map((skill, idx) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-white/5 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-white-100 font-semibold font-inter">{skill.name}</span>
                    </div>
                    <span className="text-white-100 font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-black-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className={`h-2.5 rounded-full ${skill.bg}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
