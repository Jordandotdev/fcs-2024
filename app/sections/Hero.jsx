"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const rotateX = useSpring(
    useTransform(mouseY, [0, windowSize.height], [5, -5])
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, windowSize.width], [-5, 5])
  );

  const codeSnippets = [
    `const future = await FullstackSociety.innovate();`,
    `if (you.join()) { skills.levelUp(); }`,
    `for (let dream of your.dreams) { APIIT_FCS.make(dream, 'reality'); }`,
    `while (learning) { opportunities.create(); }`,
  ];

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-100 text-gray-900 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic 3D background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <AnimatePresence>
          {isHovering ? (
            <motion.div
              key="hoverPattern"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(100)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full"
                  style={{
                    background: `radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%)`,
                    width: Math.random() * 100 + 20,
                    height: Math.random() * 100 + 20,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    translateZ: Math.random() * 200 - 100,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="defaultPattern"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(50)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full opacity-10"
                  style={{
                    background: `radial-gradient(circle, rgba(99,102,241,0.9) 0%, rgba(99,102,241,0.1) 70%)`,
                    width: Math.random() * 200 + 50,
                    height: Math.random() * 200 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    translateZ: Math.random() * 400 - 200,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 py-20 min-h-screen">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 relative">
            <span
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage:
                  "linear-gradient(to right, #4B5563, #1F2937, #6366F1)",
              }}
            >
              APIIT FCS
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-700">
            Coding the Future, One Stack at a Time
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-600">
            Join us in pushing the boundaries of technology and innovation at
            our university.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md mx-auto">
          <Link href="/join" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto relative px-6 sm:px-8 py-3 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-white font-bold text-base sm:text-lg">
                Join Now
              </span>
            </motion.button>
          </Link>
          <Link href="/events" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-transparent border-2 border-indigo-500 text-indigo-600 font-bold text-base sm:text-lg hover:bg-indigo-500 hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Events
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-xs sm:text-sm md:text-base font-mono opacity-60 whitespace-nowrap text-gray-700"
            style={{
              top: `${(index + 1) * 20}%`,
              left: index % 2 === 0 ? "5%" : "auto",
              right: index % 2 === 1 ? "5%" : "auto",
            }}
            animate={{
              y: [0, -10, 0],
              x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5,
            }}
          >
            <pre>{snippet}</pre>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
