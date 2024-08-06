"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactInformation = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-blue-600">
      Contact Information
    </h2>
    <p className="text-gray-600 mb-8">
      Reach out to us through any of these channels. We're excited to hear from
      you!
    </p>
    <div className="space-y-6">
      <motion.div className="flex items-center" whileHover={{ x: 10 }}>
        <FaEnvelope className="text-blue-500 text-2xl mr-4" />
        <span className="text-gray-700">contact@apiitfcs.com</span>
      </motion.div>
      <motion.div className="flex items-center" whileHover={{ x: 10 }}>
        <FaPhoneAlt className="text-blue-500 text-2xl mr-4" />
        <span className="text-gray-700">+94 123 456 7890</span>
      </motion.div>
      <motion.div className="flex items-center" whileHover={{ x: 10 }}>
        <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
        <span className="text-gray-700">
          APIIT City Campus, Colombo, Sri Lanka
        </span>
      </motion.div>
    </div>
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">
        Connect With Us
      </h3>
      <div className="flex space-x-6">
        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
          (Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-blue-500 hover:text-blue-600 transition-colors text-2xl"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
            </motion.a>
          )
        )}
      </div>
    </div>
  </div>
);

export default ContactInformation;
