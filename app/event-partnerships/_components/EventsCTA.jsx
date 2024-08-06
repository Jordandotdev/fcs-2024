"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const EventsPartnerCTA = () => (
  <section className="bg-gradient-to-r from-green-400 to-blue-500 py-20">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Ready to Create an Unforgettable Event?
      </h2>
      <p className="text-xl mb-10 text-white">
        Let's collaborate to bring your vision to life and inspire the tech
        community.
      </p>
      <motion.a
        href="/contact"
        className="inline-flex items-center bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Propose an Event
        <FaArrowRight className="ml-2" />
      </motion.a>
    </div>
  </section>
);

export default EventsPartnerCTA;
