"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ContactCTA = () => (
  <section className="bg-blue-600 py-16 px-4 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to take the next step?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Join APIIT FCS and start your journey towards becoming a fullstack
        developer today!
      </p>
      <motion.a
        href="#"
        className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Us <FaArrowRight className="ml-2" />
      </motion.a>
    </div>
  </section>
);

export default ContactCTA;
