"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";
import { SiTypescript, SiTensorflow } from "react-icons/si";

const TechItem = ({ Icon, name, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="hex bg-gray-800 w-32 h-32 flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <Icon className="text-5xl" style={{ color }} />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gray-800 p-4 rounded-lg shadow-lg z-10 w-48"
          >
            <h3 className="text-lg font-bold mb-2" style={{ color }}>
              {name}
            </h3>
            <p className="text-sm text-gray-300">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TechStackMasterySection = () => {
  const techStack = [
    {
      Icon: FaReact,
      name: "React",
      color: "#61DAFB",
      description:
        "Build dynamic user interfaces with the popular React library.",
    },
    {
      Icon: FaNodeJs,
      name: "Node.js",
      color: "#68A063",
      description: "Create scalable backend services with JavaScript.",
    },
    {
      Icon: SiTypescript,
      name: "TypeScript",
      color: "#007ACC",
      description: "Enhance your JavaScript with static typing.",
    },
    {
      Icon: FaPython,
      name: "Python",
      color: "#3776AB",
      description: "Versatile language for web, data science, and more.",
    },
    {
      Icon: FaDatabase,
      name: "Databases",
      color: "#F29111",
      description: "Master SQL and NoSQL database technologies.",
    },
    {
      Icon: FaCloud,
      name: "Cloud Computing",
      color: "#FF9900",
      description: "Deploy and scale your applications in the cloud.",
    },
    {
      Icon: SiTensorflow,
      name: "Machine Learning",
      color: "#FF6F00",
      description: "Implement AI and ML models in your projects.",
    },
    {
      Icon: FaMobileAlt,
      name: "Mobile Dev",
      color: "#3DDC84",
      description: "Develop cross-platform mobile applications.",
    },
  ];

  return (
    <section className="py-20 px-4 overflow-hidden bg-black relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-10">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #ffffff, #a0aec0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Tech Stack Mastery
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dive into the cutting-edge technologies that shape the digital world.
          Master these skills and become a true fullstack developer.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {techStack.map((tech, index) => (
            <TechItem key={index} {...tech} />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl text-gray-300 mb-8">
            Ready to embark on your journey to fullstack mastery?
          </p>
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(123, 31, 162, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackMasterySection;
