"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaLaptopCode,
  FaTrophy,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const JoinPage = () => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const events = [
    {
      icon: FaRocket,
      title: "Annual Hackathon",
      description: "48-hour coding marathon to solve real-world problems",
    },
    {
      icon: FaUsers,
      title: "Tech Talks",
      description: "Engaging sessions with industry leaders and innovators",
    },
    {
      icon: FaLaptopCode,
      title: "Workshops",
      description: "Hands-on learning experiences on cutting-edge technologies",
    },
    {
      icon: FaTrophy,
      title: "Coding Competitions",
      description: "Test your skills against the best and win exciting prizes",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
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
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Join APIIT FCS
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
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

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience Our Exciting Events
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <event.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits Section */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Join Our Community?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Skill Development",
                description:
                  "Access workshops and resources to enhance your technical skills",
              },
              {
                title: "Networking",
                description:
                  "Connect with like-minded individuals and industry professionals",
              },
              {
                title: "Career Opportunities",
                description:
                  "Get exposure to job openings and internship opportunities",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet Our Executive Committee
          </motion.h2>
          <div className="mb-12 max-w-3xl mx-auto">
            <img
              src="/images/fcs-tean.jpg"
              alt="APIIT FCS Executive Committee"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-center">
            <motion.button
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsApplyOpen(!isApplyOpen)}
            >
              Apply for Executive Committee
              {isApplyOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </motion.button>
          </div>
          <AnimatePresence>
            {isApplyOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <form className="bg-gray-900 p-6 rounded-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-4">
                    Executive Committee Application
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Desired Position
                    </label>
                    <select
                      id="position"
                      name="position"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                    >
                      <option value="">Select a position</option>
                      <option value="president">President</option>
                      <option value="vicePresident">Vice President</option>
                      <option value="secretary">Secretary</option>
                      <option value="treasurer">Treasurer</option>
                      <option value="techLead">Tech Lead</option>
                      <option value="eventCoordinator">
                        Event Coordinator
                      </option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="program"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Degree Program
                    </label>
                    <select
                      id="program"
                      name="program"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                    >
                      <option value="">Select your program</option>
                      <option value="computerScience">Computer Science</option>
                      <option value="softwareEngineering">
                        Software Engineering
                      </option>
                      <option value="informationTechnology">
                        Information Technology
                      </option>
                      <option value="cyberSecurity">Cyber Security</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="batch"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Batch
                    </label>
                    <input
                      type="text"
                      id="batch"
                      name="batch"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                      placeholder="e.g., 23.1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="cbNumber"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      CB Number
                    </label>
                    <input
                      type="text"
                      id="cbNumber"
                      name="cbNumber"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                      placeholder="e.g., CB009999"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="graduatingYear"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Graduating Year
                    </label>
                    <select
                      id="graduatingYear"
                      name="graduatingYear"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                    >
                      <option value="">Select graduating year</option>
                      {[...Array(5)].map((_, i) => {
                        const year = new Date().getFullYear() + i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="motivation"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Motivation
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows="4"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md"
                      placeholder="Tell us why you want to join the Executive Committee"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Application
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Shape the Future of Tech?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
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

export default JoinPage;
