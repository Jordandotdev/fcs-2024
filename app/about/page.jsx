"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaChalkboardTeacher,
  FaTrophy,
  FaHandshake,
  FaChevronDown,
} from "react-icons/fa";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [selectedYear, setSelectedYear] = useState("2024");

  const tabs = [
    { id: "mission", label: "Our Mission", icon: FaGraduationCap },
    { id: "history", label: "Our History", icon: FaTrophy },
    { id: "team", label: "Our Team", icon: FaUsers },
    { id: "partners", label: "Our Partners", icon: FaHandshake },
  ];

  const years = ["2024", "2023"];

  const teamMembers = {
    2024: [
      { role: "President", name: "John Doe" },
      { role: "Vice President", name: "Jane Smith" },
      { role: "Secretary", name: "Mike Johnson" },
      { role: "Treasurer", name: "Emily Brown" },
      { role: "Tech Lead", name: "Chris Lee" },
      { role: "Event Coordinator", name: "Sarah Wilson" },
    ],
    2023: [
      { role: "President", name: "Alex Turner" },
      { role: "Vice President", name: "Olivia Martinez" },
      { role: "Secretary", name: "Daniel Kim" },
      { role: "Treasurer", name: "Sophie Chen" },
      { role: "Tech Lead", name: "Ryan Patel" },
      { role: "Event Coordinator", name: "Emma Rodriguez" },
    ],
  };

  const tabContent = {
    mission: (
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Empowering Future Tech Leaders
        </h3>
        <p className="mb-4 text-gray-600">
          APIIT FCS is dedicated to fostering a community of innovative and
          skilled IT professionals. Our mission is to bridge the gap between
          academic knowledge and industry demands, preparing our members for
          successful careers in the ever-evolving tech landscape.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Provide cutting-edge workshops and seminars</li>
          <li>Facilitate networking opportunities with industry leaders</li>
          <li>Encourage collaborative projects and research</li>
          <li>Promote ethical and responsible use of technology</li>
        </ul>
      </div>
    ),
    history: (
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          A Legacy of Excellence
        </h3>
        <div className="space-y-4 text-gray-600">
          <div>
            <h4 className="font-semibold">2010 - Founding</h4>
            <p>
              APIIT FCS was established with a vision to create a hub for IT
              enthusiasts.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">2015 - Expansion</h4>
            <p>
              Launched our first inter-university hackathon, drawing
              participants from across the country.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">2020 - Digital Transformation</h4>
            <p>
              Successfully transitioned to virtual events, expanding our reach
              and impact.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Today</h4>
            <p>Continuing to innovate and lead in the academic IT community.</p>
          </div>
        </div>
      </div>
    ),
    team: (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            Our Executive Committee
          </h3>
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <FaChevronDown />
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {teamMembers[selectedYear].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <h4 className="font-semibold text-gray-800">{member.role}</h4>
                <p className="text-sm text-gray-600">{member.name}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    ),
    partners: (
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Our Valued Partners
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Partner 1",
            "Partner 2",
            "Partner 3",
            "Partner 4",
            "Partner 5",
            "Partner 6",
          ].map((partner) => (
            <div
              key={partner}
              className="bg-gray-100 h-24 flex items-center justify-center rounded-lg border border-gray-200"
            >
              <span className="text-xl font-bold text-gray-700">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div>
        <img
          src="/path-to-your-hero-image.jpg"
          alt="APIIT FCS"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            About APIIT FCS
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Shaping the Future of IT
            </span>
          </h2>
          <p className="text-xl text-center text-gray-600">
            APIIT Fullstack Computer Society is the premier student-led
            organization dedicated to fostering excellence in IT education and
            innovation at Asia Pacific Institute of Information Technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center px-4 py-2 rounded-full ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaLaptopCode,
                title: "Coding Workshops",
                desc: "Hands-on sessions on latest technologies",
              },
              {
                icon: FaUsers,
                title: "Networking Events",
                desc: "Connect with industry professionals",
              },
              {
                icon: FaChalkboardTeacher,
                title: "Tech Talks",
                desc: "Insights from leading tech experts",
              },
              {
                icon: FaTrophy,
                title: "Competitions",
                desc: "Showcase your skills and win prizes",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="text-4xl mb-4 mx-auto text-blue-500" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join APIIT FCS Today!
          </h2>
          <p className="text-xl mb-8">
            Be part of a community that's shaping the future of technology. Gain
            skills, make connections, and unlock your potential with APIIT FCS.
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Member
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
