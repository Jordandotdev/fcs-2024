"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinHero = () => {
  return (
    <div>
      {" "}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute inset-0"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 20 }}
          style={{
            backgroundImage: 'url("/path-to-your-pattern-image.png")',
            backgroundSize: "200% 200%",
            opacity: 0.1,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Join APIIT FCS
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Embark on a journey of innovation, learning, and growth with the
            premier tech community at APIIT.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Member
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default JoinHero;
