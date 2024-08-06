"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PartnerCTA = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-400 to-purple-400 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Partner with APIIT FCS?
          </h2>
          <p className="text-xl mb-10 text-white">
            Join us in shaping the future of tech education and innovation.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default PartnerCTA;
