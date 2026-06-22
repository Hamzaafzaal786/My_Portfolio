"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-[9999] shadow-lg shadow-purple-500/50 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
      
      {/* Glow effect under the bar */}
      <div 
        className="fixed top-0 left-0 h-6 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-md z-[9998] transition-all duration-150 pointer-events-none"
        style={{ width: `${progress}%` }}
      />
    </>
  );
}