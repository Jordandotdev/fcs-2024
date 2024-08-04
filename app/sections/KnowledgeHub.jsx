"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaShieldAlt,
  FaDatabase,
  FaCloudUploadAlt,
  FaBrain,
} from "react-icons/fa";

const DomainCard = ({ icon: Icon, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-6 cursor-pointer relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <Icon className="text-4xl mr-4" style={{ color }} />
        <h3 className="text-xl text-gray-200 font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-white font-bold">Learn More</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const KnowledgeHubSection = () => {
  const domains = [
    {
      icon: FaLaptopCode,
      title: "Software Engineering",
      color: "#61DAFB",
      description:
        "Explore best practices in software development and design patterns.",
    },
    {
      icon: FaNetworkWired,
      title: "Networking",
      color: "#68A063",
      description:
        "Understand network architectures and protocols essential for IT infrastructure.",
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      color: "#FF6B6B",
      description:
        "Learn about protecting systems, networks, and programs from digital attacks.",
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      color: "#F29111",
      description:
        "Master the art of organizing and managing large volumes of data efficiently.",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Cloud Computing",
      color: "#FF9900",
      description:
        "Discover cloud services and their implementation in modern IT solutions.",
    },
    {
      icon: FaBrain,
      title: "Artificial Intelligence",
      color: "#00BFFF",
      description:
        "Dive into machine learning, neural networks, and AI applications.",
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
            Knowledge Hub
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the diverse domains of IT and enhance your skills with our
          expert-led sessions and resources.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {domains.map((domain, index) => (
            <DomainCard key={index} {...domain} />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl text-gray-300 mb-8">
            Unlock your potential in these cutting-edge IT domains with APIIT
            FCS.
          </p>
          <motion.button
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg border border-gray-600"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Resources
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeHubSection;
