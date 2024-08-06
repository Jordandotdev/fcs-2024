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
      icon: FaGraduationCap,
      title: "Academic Excellence",
      description: "Supporting students in their IT education journey",
      color: "bg-blue-500",
    },
    {
      icon: FaLaptopCode,
      title: "Practical Skills",
      description: "Bridging the gap between theory and industry practices",
      color: "bg-green-500",
    },
    {
      icon: FaUsers,
      title: "Networking",
      description: "Connecting students with industry professionals",
      color: "bg-purple-500",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Workshops & Seminars",
      description:
        "Regular learning opportunities on cutting-edge technologies",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
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
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #2563EB, #7C3AED, #4F46E5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About APIIT FCS
              </span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Fullstack Computer Society at Asia Pacific Institute of
              Information Technology is the premier student-led organization
              dedicated to fostering excellence in IT education and innovation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to empower students with cutting-edge knowledge,
              practical skills, and invaluable networking opportunities,
              preparing them for successful careers in the ever-evolving tech
              landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 flex flex-col items-center space-y-6"
          >
            <img
              src="/images/logo-3.png"
              alt="APIIT FCS Logo"
              className="w-64 h-auto  drop-shadow-2xl "
            />
            <img
              src="/images/apiit.jpg"
              alt="APIIT University Logo"
              className="w-48 h-auto drop-shadow-sm  "
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
            <motion.div
              key={index}
              className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`text-3xl mr-4 ${feature.color} p-3 rounded-full text-white`}
              >
                <feature.icon />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
