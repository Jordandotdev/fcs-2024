"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaGraduationCap,
  FaHandshake,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const AboutTabs = ({ History }) => {
  const [activeTab, setActiveTab] = useState("mission");
  const [selectedYear, setSelectedYear] = useState("2024");

  const tabs = [
    { id: "mission", label: "Our Mission", icon: FaGraduationCap },
    { id: "history", label: "Our History", icon: FaTrophy },
    { id: "team", label: "Our Team", icon: FaUsers },
    { id: "partners", label: "Our Partners", icon: FaHandshake },
  ];

  const years = ["2024", "2023"]; // Placeholder for team members' years

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
            "We aim to provide students with the knowledge and skills they need to become leaders in the tech industry.
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
          {History?.Title || "A Legacy of Excellence"}
        </h3>
        <div className="space-y-4 text-gray-600">
          {History?.HistoryRecord?.map((record) => (
            <div key={record.id}>
              <h4 className="font-semibold">
                {record.StartDate} - {record.Title}
              </h4>
              <p>{record.Description}</p>
            </div>
          )) || (
            <div>
              <h4 className="font-semibold">2010 - Founding</h4>
              <p>APIIT FCS was established with a vision to create a hub for IT enthusiasts.</p>
            </div>
          )}
        </div>
      </div>
    ),
    team: (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Our Executive Committee</h3>
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
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Valued Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {[ "Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6" ].map((partner) => (
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
    <>
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
    </>
  );
};

export default AboutTabs;
