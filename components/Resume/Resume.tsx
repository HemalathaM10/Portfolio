"use client";

import { motion } from "framer-motion";
import { SectionWrapper, textVariant, fadeIn } from "../SectionWrapper";
import { Download, Printer, FileText } from "lucide-react";

export const Resume = () => {
  return (
    <SectionWrapper idName="resume">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          My Document
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Resume.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col items-center">
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="w-full max-w-4xl glassmorphism rounded-3xl p-4 sm:p-8 flex flex-col items-center"
        >
          <div className="w-full flex justify-end gap-4 mb-6">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors border border-white/10"
            >
              <Printer size={18} /> <span className="hidden sm:inline">Print</span>
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent rounded-lg text-white font-bold transition-colors shadow-lg shadow-primary/20"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="w-full aspect-[1/1.4] max-w-2xl bg-black-200 rounded-xl border border-white/10 flex flex-col items-center justify-center text-white-100 overflow-hidden relative">
            {/* Fallback UI if PDF cannot be loaded or is not present yet */}
            <FileText size={80} className="text-primary/50 mb-4" />
            <p className="font-poppins font-semibold text-lg text-white">Resume Preview</p>
            <p className="text-sm mt-2 text-center max-w-xs">
              Place your `resume.pdf` in the `/public` folder to display it here.
            </p>

            {/* The actual iframe will cover this when the file exists */}
            <iframe
              src="/resume.pdf#toolbar=0"
              className="absolute inset-0 w-full h-full z-10"
              title="Resume"
              onError={(e) => {
                (e.target as HTMLIFrameElement).style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
