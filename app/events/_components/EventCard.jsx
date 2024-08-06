"use client";

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

export default EventCard;
