"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper, textVariant, fadeIn } from "../SectionWrapper";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Hotel Reservation System",
    description:
      "Developed a Hotel Reservation System with a user-friendly booking interface. Designed the database and implemented reservation management logic.",
    tags: [
      { name: "HTML", color: "text-orange-500" },
      { name: "CSS", color: "text-blue-500" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Oracle DB", color: "text-red-500" },
      { name: "PL/SQL", color: "text-secondary" },
    ],
    imageBg: "bg-gradient-to-br from-[#1d1a39] to-[#4F46E5]",
    icon: <Code2 size={48} className="text-white opacity-50" />,
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "Stock Price Trend Prediction",
    description:
      "Developed a Stock Price Trend Prediction system using Linear Regression. Analyzed historical market data to forecast future stock trends.",
    tags: [
      { name: "Python", color: "text-blue-400" },
      { name: "Linear Regression", color: "text-green-500" },
      { name: "Machine Learning", color: "text-accent" },
    ],
    imageBg: "bg-gradient-to-br from-[#0f172a] to-[#06B6D4]",
    icon: <Code2 size={48} className="text-white opacity-50" />,
    source_code_link: "#",
    live_link: "#",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  imageBg,
  icon,
  source_code_link,
  live_link,
}: any) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 450,
        }}
        className="glassmorphism p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className={`relative w-full h-[230px] rounded-2xl flex justify-center items-center ${imageBg}`}>
          {icon}

          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-secondary/20 transition-all bg-black/50 backdrop-blur-sm"
            >
              <ExternalLink size={20} className="text-white" />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary/20 transition-all bg-black/50 backdrop-blur-sm"
            >
              <FaGithub size={20} className="text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] font-poppins">{name}</h3>
          <p className="mt-2 text-white-100 text-[14px] leading-[24px] font-inter">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} bg-white/5 px-2 py-1 rounded-md font-semibold`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <SectionWrapper idName="projects">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          My Work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="mt-3 text-white-100 text-[17px] max-w-3xl leading-[30px] font-inter"
        >
          Following projects showcases my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
