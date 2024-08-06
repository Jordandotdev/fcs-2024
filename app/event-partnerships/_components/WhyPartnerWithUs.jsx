"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaHandshake, FaUsers } from "react-icons/fa";

const WhyPartnerWithUs = () => {
  const benefits = [
    {
      icon: FaUsers,
      title: "Engaged Audience",
      description:
        "Reach a highly motivated and engaged audience of tech enthusiasts.",
    },
    {
      icon: FaBullhorn,
      title: "Brand Exposure",
      description:
        "Increase your brand visibility and recognition within the tech community.",
    },
    {
      icon: FaHandshake,
      title: "Collaborative Opportunities",
      description:
        "Forge strong partnerships and collaborations with like-minded organizations.",
    },
  ];
  return (
    <div>
      {" "}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg text-center"
                  whileHover={{ y: -10 }}
                >
                  <IconComponent className="text-5xl text-green-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPartnerWithUs;
