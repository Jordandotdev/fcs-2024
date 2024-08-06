"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaLaptopCode, FaTrophy } from "react-icons/fa";

const JoinEvents = () => {
  const events = [
    {
      icon: FaRocket,
      title: "Annual Hackathon",
      description: "48-hour coding marathon to solve real-world problems",
    },
    {
      icon: FaUsers,
      title: "Tech Talks",
      description: "Engaging sessions with industry leaders and innovators",
    },
    {
      icon: FaLaptopCode,
      title: "Workshops",
      description: "Hands-on learning experiences on cutting-edge technologies",
    },
    {
      icon: FaTrophy,
      title: "Coding Competitions",
      description: "Test your skills against the best and win exciting prizes",
    },
  ];
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience Our Exciting Events
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <event.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinEvents;
