"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaLaptopCode,
                title: "Coding Workshops",
                desc: "Hands-on sessions on latest technologies",
              },
              {
                icon: FaUsers,
                title: "Networking Events",
                desc: "Connect with industry professionals",
              },
              {
                icon: FaChalkboardTeacher,
                title: "Tech Talks",
                desc: "Insights from leading tech experts",
              },
              {
                icon: FaTrophy,
                title: "Competitions",
                desc: "Showcase your skills and win prizes",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="text-4xl mb-4 mx-auto text-blue-500" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
