"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="h-48 bg-gray-200 relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg">
          {event.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex items-center text-gray-500 mb-2">
          <FaCalendar className="mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <FaClock className="mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaUsers className="mr-2" />
          <span>{event.capacity} participants</span>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
        {event.status === "completed" ? (
          <span className="text-green-600 flex items-center">
            <FaCheckCircle className="mr-2" /> Completed
          </span>
        ) : (
          <span className="text-yellow-600 flex items-center">
            <FaHourglassHalf className="mr-2" /> Upcoming
          </span>
        )}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {event.status === "completed" ? "View Recap" : "Register Now"}
        </button>
      </div>
    </motion.div>
  );
};

const EventsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const allEvents = [
    {
      id: 1,
      title: "Hackathon 2024",
      description: "48-hour coding challenge to solve real-world problems.",
      date: "2024-06-15",
      time: "09:00 AM - 09:00 AM (48 hours)",
      location: "Main Campus, Building A",
      capacity: 100,
      category: "Competition",
      status: "upcoming",
      image: "/images/bringo.jpeg",
      series: false,
    },
    {
      id: 2,
      title: "Web Dev Workshop Series: Part 1",
      description: "Introduction to modern web development frameworks.",
      date: "2024-05-01",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      capacity: 50,
      category: "Workshop",
      status: "upcoming",
      image: "/images/ausentt.jpeg",
      series: true,
    },
    {
      id: 3,
      title: "AI & Machine Learning Symposium",
      description: "Exploring the latest trends in AI and ML.",
      date: "2024-03-20",
      time: "10:00 AM - 4:00 PM",
      location: "Auditorium B",
      capacity: 200,
      category: "Symposium",
      status: "completed",
      image: "/images/skf.jpeg",
      series: false,
    },
    // Add more events...
  ];

  useEffect(() => {
    const filtered = allEvents.filter(
      (event) =>
        (filter === "all" || event.status === filter) &&
        (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredEvents(filtered);
  }, [filter, searchTerm]);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div>
        <img
          src="/images/events-hero.jpg"
          alt="APIIT FCS Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            APIIT FCS Events
          </h1>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-4 py-2 rounded-full ${
                filter === "upcoming"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-full ${
                filter === "completed"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Completed
            </button>
          </div>
          <input
            type="text"
            placeholder="Search events..."
            className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 rounded-full"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No events found matching your criteria.
          </p>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-100 mb-8">
            Subscribe to our newsletter to get the latest updates on our events.
          </p>
          <form className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 bg-white text-gray-800 rounded-full w-full sm:w-auto"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
