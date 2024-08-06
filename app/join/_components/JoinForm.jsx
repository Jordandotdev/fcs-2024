"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinForm = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join APIIT FCS
          </motion.h2>
          <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="program"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Degree Program
              </label>
              <select
                id="program"
                name="program"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Batch
              </label>
              <input
                type="text"
                id="batch"
                name="batch"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 23.1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cbNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CB Number
              </label>
              <input
                type="text"
                id="cbNumber"
                name="cbNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., CB009999"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="graduatingYear"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Graduating Year
              </label>
              <select
                id="graduatingYear"
                name="graduatingYear"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Motivation
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us why you want to join APIIT FCS"
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
        </div>
      </section>
    </div>
  );
};

export default JoinForm;
