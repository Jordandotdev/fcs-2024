"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUserAstronaut,
  FaSatellite,
  FaSpaceShuttle,
} from "react-icons/fa";

const JoinFCSSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className=" text-white py-20 px-4 overflow-hidden relative min-h-screen flex items-center justify-center">
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

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            style={{
              background: "linear-gradient(to right,#60A5FA, #A78BFA, #F87171)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Join the FCS Revolution
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embark on a journey to become a{" "}
          <span
            style={{
              background: "linear-gradient(to right, #6ee7b7, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            fullstack maestro
          </span>{" "}
          and shape the future of technology.
        </motion.p>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="bg-gradient-to-r text-center from-gray-700 to-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg border border-gray-600"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join Fullstack Computer Society
          </motion.button>

          {/* Floating icons */}
          <motion.div
            className="absolute -top-12 -left-12 text-4xl text-blue-400"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <FaRocket />
          </motion.div>
          <motion.div
            className="absolute -bottom-12 -right-12 text-4xl text-purple-400"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <FaUserAstronaut />
          </motion.div>
          <motion.div
            className="absolute -top-12 -right-12 text-4xl text-green-400"
            animate={{
              x: [0, 20, 0],
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <FaSatellite />
          </motion.div>
          <motion.div
            className="absolute -bottom-12 -left-12 text-4xl text-yellow-400"
            animate={{
              x: [0, -20, 0],
              rotate: [-360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <FaSpaceShuttle />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-gray-400 text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Join now and get access to exclusive workshops, projects, and
          networking opportunities!
        </motion.p>
      </div>
    </section>
  );
};

export default JoinFCSSection;
