"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinCTA = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-400 to-purple-400 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Shape the Future of Tech?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join APIIT FCS today and be part of a community that's driving
            innovation and excellence in technology.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default JoinCTA;
