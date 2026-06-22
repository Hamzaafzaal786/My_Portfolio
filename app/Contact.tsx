"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaDownload,
  FaFilePdf
} from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect! I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
              <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:hamzaafzaal669@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                  hamzaafzaal669@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
              <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href="tel:+923272738970" className="text-white font-medium hover:text-purple-400 transition-colors">
                  +92 3272738970
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
              <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Karachi, Pakistan</p>
              </div>
            </div>

            {/* Social Links - Now in grid */}
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
              <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                <FaGithub size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Social</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Hamzaafzaal786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <span className="text-gray-600">|</span>
                  <a
                    href="https://linkedin.com/in/syed-hamza-afzaal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ⭐ PROMINENT RESUME DOWNLOAD - CENTERED ⭐ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-gray-700"
          >
            <div className="flex justify-center">
              <a
                href="/resume.pdf"
                download
                className="group relative w-full md:w-auto min-w-[300px] px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:bg-[position:100%_0] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <FaFilePdf size={28} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
                <FaDownload size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
            <p className="text-center text-gray-500 text-sm mt-3">
              📄 PDF Format • Updated 2025
            </p>
          </motion.div>

          {/* Social Icons - Bottom */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Hamzaafzaal786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/30 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all hover:scale-110 text-gray-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/syed-hamza-afzaal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/30 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all hover:scale-110 text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:hamzaafzaal669@gmail.com"
                className="p-3 bg-gray-700/30 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all hover:scale-110 text-gray-400"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}