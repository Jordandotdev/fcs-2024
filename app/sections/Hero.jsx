"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

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
    useTransform(mouseY, [0, windowSize.height], [10, -10])
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, windowSize.width], [-10, 10])
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-black text-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
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
        {[...Array(50)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)`,
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              translateZ: Math.random() * 400 - 200,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
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
                backgroundImage: "linear-gradient(to right, #4B5563, #FFFFFF)",
              }}
            >
              APIIT FCS
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-300">
            Coding the Future, One Stack at a Time
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Join us in pushing the boundaries of technology and innovation at
            our university.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.button
            className="relative px-6 sm:px-8 py-3 rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-white opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative text-white font-bold text-base sm:text-lg">
              Join Now
            </span>
          </motion.button>
          <motion.button
            className="px-6 sm:px-8 py-3 rounded-full bg-transparent border-2 border-gray-500 text-white font-bold text-base sm:text-lg hover:bg-gray-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Projects
          </motion.button>
        </div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-10 left-4 sm:left-10 text-xs sm:text-sm font-mono opacity-50 whitespace-nowrap"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <pre>{`const future = await FullstackSociety.innovate();`}</pre>
        </motion.div>

        <motion.div
          className="absolute top-10 right-4 sm:right-10 text-xs sm:text-sm font-mono opacity-50 whitespace-nowrap"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <pre>{`if (you.join()) { skills.levelUp(); }`}</pre>
        </motion.div>
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
          className="w-6 h-6 text-gray-400"
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
