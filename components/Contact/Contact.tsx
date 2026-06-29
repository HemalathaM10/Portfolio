"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper, textVariant, slideIn } from "../SectionWrapper";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with actual EmailJS credentials
    emailjs
      .send(
        "service_id",
        "template_id",
        {
          from_name: form.name,
          to_name: "Hemalatha M",
          from_email: form.email,
          to_email: "hemamurugan783@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        "public_key"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <SectionWrapper idName="contact">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins">
          Get in touch
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-poppins">
          Contact.
        </h2>
      </motion.div>

      <div className="mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] glassmorphism p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <label className="flex flex-col flex-1">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </label>
              <label className="flex flex-col flex-1">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all resize-none"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send size={18} />}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] glassmorphism p-8 rounded-2xl flex flex-col gap-8"
        >

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-[18px]">Email</h4>
              <p className="text-white-100 mt-1">hemamurugan783@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-[18px]">Location</h4>
              <p className="text-white-100 mt-1">Thiruchengode, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/in/hemalatha0810" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex justify-center items-center text-white transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/HemalathaM10" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex justify-center items-center text-white transition-all">
              <FaGithub size={20} />
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-48 rounded-xl bg-black-200 border border-white/10 mt-auto overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.980644349187!2d78.1568285!3d11.2217646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce5e3f22014f%3A0xa0faea6ee570b561!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
