"use client";

import { motion } from "framer-motion";
import { SectionWrapper, textVariant, fadeIn } from "../SectionWrapper";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Typewriting Tamil & English",
    issuer: "Krishna Institute",
    icon: <Award size={40} className="text-secondary" />,
  },
  {
    title: "Diploma in Computer Applications",
    issuer: "Recognized Institute",
    icon: <Award size={40} className="text-primary" />,
  },
];

export const Certifications = () => {
  return (
    <SectionWrapper idName="certifications">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          Extra Curricular
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Certifications.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="flex-1 min-w-[300px] glassmorphism p-8 rounded-3xl flex items-start gap-6 border border-white/5 hover:border-secondary/50 transition-colors duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
              {cert.icon}
            </div>
            <div>
              <h3 className="text-white text-[22px] font-bold font-poppins leading-tight mb-2">
                {cert.title}
              </h3>
              <p className="text-secondary font-medium text-[16px]">
                {cert.issuer}
              </p>
              <div className="flex items-center gap-2 mt-4 text-green-400">
                <CheckCircle size={16} />
                <span className="text-[14px] font-semibold">Completed</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
