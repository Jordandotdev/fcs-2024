"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaHandshake,
  FaCalendarAlt,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
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
      {/* Collaboration Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            Collaborate with Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
            >
              <FaHandshake className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Industry Partnerships
              </h3>
              <p className="text-gray-600 mb-4">
                We're always looking for industry partners to provide real-world
                projects, mentorship, and career opportunities for our members.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                whileHover={{ x: 5 }}
              >
                Learn More <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
            >
              <FaCalendarAlt className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Event Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to organize tech events, hackathons, or
                workshops. Let's create impactful experiences for the tech
                community together.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                whileHover={{ x: 5 }}
              >
                Propose an Event <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us through any of these channels. We're excited to
              hear from you!
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

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="mt-4 p-4 bg-green-600 text-white rounded-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-gradient-to-r from-blue-400 to-purple-400 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Join APIIT FCS Today!
          </h2>
          <p className="text-xl mb-10 text-white">
            Take the first step towards becoming a fullstack development expert.
            Join our community of passionate learners and innovators.
          </p>
          <motion.a
            href="/join"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Member
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
