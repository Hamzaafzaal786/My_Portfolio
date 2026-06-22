"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiFlutter,
  SiDart,
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiLinux,
} from "react-icons/si";
import { FaDatabase, FaJava, FaServer } from "react-icons/fa";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "Flutter", level: 85, icon: <SiFlutter />, color: "#02569B" },
  { name: "Dart", level: 80, icon: <SiDart />, color: "#00B4AB" },
  { name: "C#", level: 80, icon: <SiSharp />, color: "#239120" },
  { name: "MERN Stack", level: 75, icon: <SiReact />, color: "#61DAFB" },
  { name: "JavaScript", level: 80, icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", level: 70, icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", level: 70, icon: <SiNodedotjs />, color: "#339933" },
  { name: "Python", level: 75, icon: <SiPython />, color: "#3776AB" },
  { name: "Java", level: 70, icon: <FaJava />, color: "#007396" },
  { name: "SQL Server", level: 80, icon: <FaServer />, color: "#CC2927" },
  { name: "MongoDB", level: 70, icon: <SiMongodb />, color: "#47A248" },
  { name: "Database Design", level: 75, icon: <FaDatabase />, color: "#4479A1" },
  { name: "HTML5", level: 90, icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", level: 85, icon: <SiCss />, color: "#1572B6" },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Linux Shell", level: 65, icon: <SiLinux />, color: "#FCC624" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-white font-medium">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: isInView ? `${skill.level}%` : 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 text-sm">
            🚀 Flutter Development
          </span>
          <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 text-sm">
            ⚙️ MERN Stack
          </span>
          <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 text-sm">
            📊 SQL Server
          </span>
          <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30 text-sm">
            🛠️ OOP
          </span>
          <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full border border-red-500/30 text-sm">
            🎯 Problem Solving
          </span>
          <span className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30 text-sm">
            📱 Mobile App Development
          </span>
        </motion.div>
      </div>
    </section>
  );
}