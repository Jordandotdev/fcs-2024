"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => (
  <section className="relative h-[50vh] overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    />
    <motion.div
      className="absolute inset-0 bg-white opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-4 text-gray-800"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center max-w-2xl text-gray-600"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Have questions? We're here to help you on your journey to becoming a
        fullstack developer.
      </motion.p>
    </div>
  </section>
);

export default ContactHero;
