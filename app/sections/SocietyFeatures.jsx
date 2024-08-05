"use client";
import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-xl shadow-lg"
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
  >
    <div className="text-indigo-500 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const SocietyFeatures = () => {
  const features = [
    {
      icon: "🚀",
      title: "Cutting-edge Projects",
      description:
        "Work on real-world projects using the latest technologies in web and mobile development.",
    },
    {
      icon: "🤝",
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals and like-minded peers to expand your professional network.",
    },
    {
      icon: "🏆",
      title: "Hackathons & Competitions",
      description:
        "Participate in exciting coding challenges and showcase your skills on a competitive stage.",
    },
    {
      icon: "📚",
      title: "Workshops & Seminars",
      description:
        "Enhance your knowledge through regular workshops and seminars on emerging technologies.",
    },
  ];

  return (
    <section className=" text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-400 to-white">
            Why Join Fullstack Society?
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to level up your skills?
          </h3>
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default SocietyFeatures;
