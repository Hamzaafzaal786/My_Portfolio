"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaUserGraduate, FaTrophy, FaStar } from "react-icons/fa";
import CountUp from 'react-countup';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FaUserGraduate className="text-purple-400" />
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm <span className="text-purple-400 font-semibold">Syed Hamza Afzaal</span>, 
                a passionate Software Engineering student in my 7th semester with a 
                <span className="text-purple-400 font-semibold"> CGPA of 3.76</span>. 
                I'm driven by a love for building innovative solutions that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in <span className="text-purple-400 font-semibold">Flutter, MERN Stack, and C#</span>, 
                creating responsive, scalable, and user-friendly applications. I'm 
                constantly learning new technologies and best practices to stay at 
                the forefront of the industry.
              </p>

              {/* ⭐ ANIMATED COUNTER STATS ⭐ */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-700/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors">
                  <div className="text-2xl font-bold text-purple-400">
                    {isInView && <CountUp end={3.76} decimals={2} duration={3} />}
                  </div>
                  <div className="text-gray-400 text-sm">CGPA</div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors">
                  <div className="text-2xl font-bold text-purple-400">
                    {isInView && <CountUp end={6} duration={3} />}+
                  </div>
                  <div className="text-gray-400 text-sm">Projects Built</div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors">
                  <div className="text-2xl font-bold text-purple-400">
                    {isInView && <CountUp end={16} duration={3} />}+
                  </div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors">
                  <div className="text-2xl font-bold text-purple-400">
                    {isInView && <CountUp end={6} duration={3} />}
                    
                  </div>
                  <div className="text-gray-400 text-sm">Semesters Completed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold text-white">
                    Bachelor's in Software Engineering
                  </h4>
                  <p className="text-purple-400 text-sm">2022 - 2026</p>
                  <p className="text-gray-400">Bahria University, Karachi Campus</p>
                  <p className="text-gray-300 mt-1 font-semibold">CGPA: 3.76</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold text-white">
                    FSC (Pre Engineering)
                  </h4>
                  <p className="text-purple-400 text-sm">2023</p>
                  <p className="text-gray-400">Bahria College Karsaz, Karachi</p>
                  <p className="text-gray-300 mt-1 font-semibold">Percentage: 87%</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold text-white">
                    Matriculation
                  </h4>
                  <p className="text-purple-400 text-sm">2021</p>
                  <p className="text-gray-400">Bahria College Karsaz, Karachi</p>
                  <p className="text-gray-300 mt-1 font-semibold">Percentage: 93.99%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Academic Highlights - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/50 via-gray-800/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <FaTrophy className="text-purple-400" />
              Academic Highlights
              <FaStar className="text-pink-400" />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-105">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-gray-300 font-medium">Object-Oriented Programming</p>
                <p className="text-gray-500 text-sm mt-1">Strong Foundation</p>
              </div>
              
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-105">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-gray-300 font-medium">Database-Driven Applications</p>
                <p className="text-gray-500 text-sm mt-1">Hands-on Experience</p>
              </div>
              
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-105">
                <div className="text-3xl mb-2">🔄</div>
                <p className="text-gray-300 font-medium">Software Design Principles</p>
                <p className="text-gray-500 text-sm mt-1">Development Lifecycle</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto">
            "Building the future, one line of code at a time."
          </blockquote>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>
      </div>
    </section>
  );
}