"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaTrophy,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const RecapPage = () => {
  const event = {
    title: "Hackathon 2024",
    coverImage: "/images/bringo.jpeg",
    description:
      "Our annual hackathon brought together 100 brilliant minds to solve real-world problems...",
    date: "June 15-16, 2024",
    time: "48 hours",
    location: "Main Campus, Building A",
    attendees: 100,
    highlights: [
      "15 innovative projects developed",
      "3000+ lines of code written",
      "$10,000 in prizes awarded",
      "5 industry-leading judges",
    ],
    images: [
      "/images/bringo.jpeg",
      "/images/skf.jpeg",
      "/images/bringo.jpeg",
      // ... more images
    ],
    testimonials: [
      {
        quote:
          "This hackathon was an incredible experience. I learned so much and made great connections!",
        name: "Jane Doe",
        title: "Computer Science Student",
        avatar: "/images/bringo.jpeg",
      },
      {
        quote:
          "The level of innovation I saw at this event was truly impressive. APIIT FCS is doing a great job!",
        name: "John Smith",
        title: "Industry Mentor",
        avatar: "/images/bringo.jpeg",
      },
      // ... more testimonials
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.img
          src={event.coverImage}
          alt={event.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {event.title} - Recap
          </motion.h1>
        </div>
      </section>

      {/* Event Details */}
      <section className="max-w-6xl mx-auto py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Event Overview
            </h2>
            <p className="text-gray-300 mb-4 md:mb-6">{event.description}</p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center text-gray-400">
                <FaCalendar className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaClock className="mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaUsers className="mr-2" />
                <span>{event.attendees} Attendees</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Key Highlights
            </h2>
            <ul className="space-y-3 md:space-y-4">
              {event.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaTrophy className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Event Gallery
          </h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={event.images[currentImageIndex]}
                alt={`Event image ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Participant Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {event.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-4 md:p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FaQuoteLeft className="text-xl md:text-2xl text-blue-500 mb-3 md:mb-4" />
                <p className="text-gray-300 mb-3 md:mb-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Don't Miss Our Next Event!
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Stay tuned for more exciting events and opportunities to learn and
            grow.
          </p>
          <motion.button
            className="bg-white text-blue-600 font-bold py-2 md:py-3 px-6 md:px-8 rounded-full text-base md:text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Upcoming Events
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default RecapPage;
