"use client";
import React from "react";
import { motion } from "framer-motion";

const IndustryPartnersHero = () => {
  return (
    <div>
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
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
            Industry Partnerships
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Collaborate with APIIT FCS to shape the future of tech talent
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default IndustryPartnersHero;
