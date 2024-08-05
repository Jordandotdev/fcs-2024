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
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Skills",
      description: "Bridging the gap between theory and industry practices",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaUsers />,
      title: "Networking",
      description: "Connecting students with industry professionals",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Workshops & Seminars",
      description:
        "Regular learning opportunities on cutting-edge technologies",
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <section className="  text-white py-20 px-4 relative overflow-hidden">
      {/* Animated background pattern */}

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
                  background:
                    "linear-gradient(to right, #60A5FA, #A78BFA, #F87171)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                About APIIT FCS
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Fullstack Computer Society at Asia Pacific Institute of
              Information Technology is the premier student-led organization
              dedicated to fostering excellence in IT education and innovation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to empower students with cutting-edge knowledge,
              practical skills, and invaluable networking opportunities,
              preparing them for successful careers in the ever-evolving tech
              landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3"
          >
            <img
              src="/images/logo-2.png"
              alt="APIIT FCS Logo"
              className="w-64 h-auto filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
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
              className="flex items-start bg-gray-900 bg-opacity-70 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`text-4xl mr-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
