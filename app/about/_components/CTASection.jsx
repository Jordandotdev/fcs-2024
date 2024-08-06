"use client";
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <div>
      {" "}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join APIIT FCS Today!
          </h2>
          <p className="text-xl mb-8">
            Be part of a community that's shaping the future of technology. Gain
            skills, make connections, and unlock your potential with APIIT FCS.
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Member
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
