"use client";
import React from "react";
import { FaLaptopCode, FaMicrophone, FaTrophy, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const EventTypes = () => {
  const eventTypes = [
    {
      icon: FaMicrophone,
      title: "Tech Talks",
      description:
        "Inspire the next generation of developers with industry insights.",
    },
    {
      icon: FaLaptopCode,
      title: "Hackathons",
      description:
        "Challenge students to solve real-world problems in intensive coding events.",
    },
    {
      icon: FaUsers,
      title: "Workshops",
      description:
        "Provide hands-on learning experiences in cutting-edge technologies.",
    },
    {
      icon: FaTrophy,
      title: "Coding Competitions",
      description: "Sponsor exciting coding challenges to identify top talent.",
    },
  ];

  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Events We Can Create Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="text-4xl text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventTypes;
