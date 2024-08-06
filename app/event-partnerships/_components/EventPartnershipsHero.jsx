"use client";
import React from "react";
import { motion } from "framer-motion";

const EventPartnershipsHero = () => (
  <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    />
    <div className="relative z-10 text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Event Partnerships
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Create impactful tech events with APIIT FCS
      </motion.p>
    </div>
  </section>
);

export default EventPartnershipsHero;
