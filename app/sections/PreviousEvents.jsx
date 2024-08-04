"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const EventCard = ({ event, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      className={`bg-gray-900 rounded-lg p-4 sm:p-6 cursor-pointer ${
        isExpanded ? "col-span-1 md:col-span-2 row-span-1 md:row-span-2" : ""
      }`}
      onClick={onToggle}
    >
      <motion.h3
        layout="position"
        className="text-xl sm:text-2xl font-bold mb-2"
      >
        {event.title}
      </motion.h3>
      <motion.div
        layout="position"
        className="flex items-center mb-2 text-gray-400 text-sm sm:text-base"
      >
        <FaCalendar className="mr-2" />
        <span>{event.date}</span>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              {event.description}
            </p>
            <div className="flex items-center mb-2 text-gray-400 text-sm sm:text-base">
              <FaClock className="mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center mb-2 text-gray-400 text-sm sm:text-base">
              <FaMapMarkerAlt className="mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm sm:text-base">
              <FaUsers className="mr-2" />
              <span>{event.capacity} participants</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const EventsAndWorkshopsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const events = [
    {
      id: 1,
      title: "Hackathon: Code for Change",
      date: "October 15-16, 2024",
      time: "48 hours",
      location: "Main Campus, Building A",
      capacity: 100,
      description:
        "Join us for a 48-hour coding marathon where you'll work in teams to develop innovative solutions for real-world problems. Great prizes to be won!",
    },
    {
      id: 2,
      title: "Workshop: Intro to Machine Learning",
      date: "November 5, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      capacity: 50,
      description:
        "Learn the basics of machine learning in this hands-on workshop. We'll cover fundamental concepts and work on a practical project.",
    },
    {
      id: 3,
      title: "Tech Talk: Future of Web Development",
      date: "December 1, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Auditorium B",
      capacity: 200,
      description:
        "Join industry experts as they discuss emerging trends and technologies shaping the future of web development.",
    },
    {
      id: 4,
      title: "Coding Competition: Algorithm Challenge",
      date: "January 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Science Building",
      capacity: 80,
      description:
        "Test your problem-solving skills in this intense coding competition. Tackle challenging algorithms and optimize your solutions.",
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12 text-center"
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
            Events & Workshops
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          layout
        >
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isExpanded={expandedId === event.id}
              onToggle={() =>
                setExpandedId(expandedId === event.id ? null : event.id)
              }
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6">
            Don't miss out on these exciting opportunities to learn, grow, and
            connect!
          </p>
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r text-center from-gray-700 to-gray-900 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg border border-gray-600"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More Events
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsAndWorkshopsSection;
