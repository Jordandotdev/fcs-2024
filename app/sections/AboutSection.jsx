"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

const AboutSection = () => {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description: "Supporting students in their IT education journey",
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Skills",
      description: "Bridging the gap between theory and industry practices",
    },
    {
      icon: <FaUsers />,
      title: "Networking",
      description: "Connecting students with industry professionals",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Workshops & Seminars",
      description:
        "Regular learning opportunities on cutting-edge technologies",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span
                style={{
                  background: "linear-gradient(to right, #ffffff, #a0aec0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About APIIT FCS
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Fullstack Computer Society at Asia Pacific Institute of
              Information Technology is the premier student-led organization
              dedicated to fostering excellence in IT education and innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to empower students with cutting-edge knowledge,
              practical skills, and invaluable networking opportunities,
              preparing them for successful careers in the ever-evolving tech
              landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3"
          >
            <img
              src="/images/logo-2.png"
              alt="APIIT FCS Logo"
              className="w-64 h-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="text-3xl text-gray-400 mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
