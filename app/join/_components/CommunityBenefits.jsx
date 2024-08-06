"use client";
import React from "react";
import { motion } from "framer-motion";

const CommunityBenefits = () => {
  return (
    <div>
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-600"
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
                className="text-center bg-gray-100 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityBenefits;
