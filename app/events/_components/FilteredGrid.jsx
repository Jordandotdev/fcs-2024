"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";

const FilteredGrid = () => {
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
    <div>
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
    </div>
  );
};

export default FilteredGrid;
