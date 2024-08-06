"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const CollaborationSection = () => (
  <section className="bg-gray-100 py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Collaborate with Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          whileHover={{ y: -5 }}
        >
          <FaHandshake className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
          <p className="text-gray-600 mb-4">
            We're always looking for industry partners to provide real-world
            projects, mentorship, and career opportunities for our members.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            whileHover={{ x: 5 }}
          >
            Learn More <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          whileHover={{ y: -5 }}
        >
          <FaCalendarAlt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Event Partnerships</h3>
          <p className="text-gray-600 mb-4">
            Partner with us to organize tech events, hackathons, or workshops.
            Let's create impactful experiences for the tech community together.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            whileHover={{ x: 5 }}
          >
            Propose an Event <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CollaborationSection;
