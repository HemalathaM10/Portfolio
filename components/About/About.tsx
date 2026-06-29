"use client";

import { motion } from "framer-motion";
import { SectionWrapper, fadeIn, textVariant } from "../SectionWrapper";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Overview.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="flex-1 glassmorphism p-8 rounded-3xl"
        >
          <p className="mt-4 text-white-100 text-[17px] max-w-3xl leading-[30px] font-inter">
            Motivated MCA student with foundational knowledge in HTML, CSS,
            Java, SQL, Oracle Database, and software development. Passionate
            about learning new technologies and building practical software
            solutions. Seeking an entry-level Software Developer role where I
            can enhance my technical expertise while contributing to
            organizational success.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-white-100 text-sm">Location</p>
                <p className="text-white font-bold">Thiruchengode, Tamil Nadu</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-white-100 text-sm">Degree</p>
                <p className="text-white font-bold">MCA</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-white-100 text-sm">Role</p>
                <p className="text-white font-bold">Software Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <User size={24} />
              </div>
              <div>
                <p className="text-white-100 text-sm">Status</p>
                <p className="text-white font-bold">Open to Work</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="md:w-[400px] w-full flex justify-center items-center"
        >

        </motion.div>
      </div>
    </SectionWrapper>
  );
};
