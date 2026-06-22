"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Weather App",
    description: "Flutter app using OpenWeather API & Firebase (Auth, Firestore, FCM). Features real-time weather, GPS, 5-day forecast, offline cache, and unit toggle.",
    tech: ["Flutter", "Dart", "Firebase", "OpenWeather API"],
    github: "https://github.com/Hamzaafzaal786/Hamza_WeatherApp",
  },
  {
    title: "Pharmacy Management System",
    description: "GUI-based C# application developed using 3-Tier Architecture with proper database management via SQL Server Management Studio.",
    tech: ["C#", "SQL Server", "Visual Studio", "3-Tier Architecture"],
    github: "https://github.com/Hamzaafzaal786",
  },
  {
    title: "Smart Dairy Farm Management System",
    description: "Java-based management system integrated with SQL Server via ODBC Driver for efficient data storage and retrieval.",
    tech: ["Java", "SQL Server", "ODBC", "Swing"],
    github: "https://github.com/Hamzaafzaal786/SmartDairyFarmManagementSystem",
  },
  {
    title: "Restaurant Management System (Desktop)",
    description: "C# GUI-based system developed using Visual Studio with file handling concepts for restaurant operations management.",
    tech: ["C#", "Visual Studio", "File Handling", "WinForms"],
    github: "https://github.com/Hamzaafzaal786",
  },
  {
    title: "Airline Shortest Path System",
    description: "GUI-based C# application implementing Dijkstra's Algorithm to calculate shortest routes across Pakistani airports.",
    tech: ["C#", "Dijkstra's Algorithm", "WinForms", "Graph Theory"],
    github: "https://github.com/Hamzaafzaal786",
  },
  {
    title: "Restaurant Management System (Website)",
    description: "Responsive website built using HTML, CSS, and JavaScript to manage restaurant information and operations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/Hamzaafzaal786",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications I've built using various technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* ⭐ 3D TILT - Disabled on Mobile ⭐ */}
              <Tilt
                tiltEnable={!isMobile} // Disable on mobile
                tiltMaxAngleX={isMobile ? 0 : 12}
                tiltMaxAngleY={isMobile ? 0 : 12}
                glareEnable={!isMobile}
                glareMaxOpacity={0.15}
                glarePosition="top"
                glareColor="#a855f7"
                scale={isMobile ? 1 : 1.02}
                transitionSpeed={300}
                className="h-full"
              >
                <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-gray-700 hover:border-purple-500 transition-all h-full">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-700/50 rounded-full hover:bg-gray-700"
                          aria-label="View on GitHub"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-700/50 rounded-full hover:bg-gray-700"
                          aria-label="View Live Demo"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 md:px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ⭐ Mobile Tap Hint - Shows only on mobile */}
                  {isMobile && (
                    <div className="mt-4 text-center text-xs text-gray-500 border-t border-gray-700/50 pt-3">
                      👆 Tap the GitHub icon to view code
                    </div>
                  )}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Hamzaafzaal786?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform text-sm md:text-base"
          >
            View All Projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}