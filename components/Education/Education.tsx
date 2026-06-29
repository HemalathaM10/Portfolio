"use client";

import { motion } from "framer-motion";
import { SectionWrapper, textVariant } from "../SectionWrapper";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationDetails = [
  {
    title: "Master of Computer Applications",
    institution: "KSR College of Engineering",
    date: "Sep 2025 – May 2027",
    icon: <GraduationCap size={24} />,
    color: "bg-primary",
  },
  {
    title: "Bachelor of Science (Mathematics)",
    institution: "Vivekanandha College of Arts and Science for Women",
    date: "Aug 2022 – May 2025",
    points: ["GPA: 6.9/10"],
    icon: <BookOpen size={24} />,
    color: "bg-secondary",
  },
  {
    title: "Higher Secondary",
    institution: "Government Girls Higher Secondary School",
    date: "Completed",
    points: ["Class XII: 67%"],
    icon: <BookOpen size={24} />,
    color: "bg-accent",
  },
  {
    title: "SSLC",
    institution: "Government Girls Higher Secondary School",
    date: "Completed",
    points: ["Class X: 64%"],
    icon: <BookOpen size={24} />,
    color: "bg-primary",
  },
];

export const Education = () => {
  return (
    <SectionWrapper idName="education">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          What I have studied so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-[4px] bg-white/10 -translate-x-1/2" />

        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex flex-col sm:flex-row items-start sm:items-center w-full mb-12 sm:mb-8 relative z-10 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node */}
            <div
              className={`absolute left-[39px] sm:left-1/2 w-[24px] h-[24px] rounded-full border-4 border-background -translate-x-1/2 z-20 ${edu.color}`}
            />

            {/* Content Box */}
            <div
              className={`w-full sm:w-[calc(50%-40px)] pl-24 sm:pl-0 ${
                index % 2 === 0 ? "sm:text-left sm:pr-0" : "sm:text-right sm:pr-0"
              }`}
            >
              <div
                className={`glassmorphism p-6 rounded-2xl border-b-4 border-b-transparent hover:border-b-${
                  edu.color.split("-")[1]
                } transition-all duration-300 relative group`}
              >
                {/* Mobile Date */}
                <div className="flex sm:hidden items-center gap-2 text-white-100 text-sm mb-2">
                  <Calendar size={14} /> {edu.date}
                </div>
                
                <h3 className="text-white text-[20px] font-bold font-poppins flex items-center gap-2 justify-start sm:justify-start">
                  <span className={`${edu.color.replace("bg-", "text-")} hidden sm:block`}>
                    {edu.icon}
                  </span>
                  {edu.title}
                </h3>
                <p className="text-secondary font-semibold text-[16px] m-0">
                  {edu.institution}
                </p>
                {edu.points && (
                  <ul className="mt-2 list-none space-y-1">
                    {edu.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-white-100 text-[14px] font-inter tracking-wider"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Desktop Date */}
            <div
              className={`hidden sm:flex w-[calc(50%-40px)] items-center ${
                index % 2 === 0 ? "justify-start pl-10" : "justify-end pr-10"
              }`}
            >
              <div className="flex items-center gap-2 text-white-100 font-semibold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Calendar size={16} className="text-secondary" /> {edu.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
