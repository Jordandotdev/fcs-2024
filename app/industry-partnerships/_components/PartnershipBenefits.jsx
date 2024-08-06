"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const PartnershipBenefits = () => {
  const partnershipBenefits = [
    {
      icon: FaLightbulb,
      title: "Innovation Hub",
      description:
        "Access to fresh ideas and cutting-edge projects from talented students.",
    },
    {
      icon: FaUsers,
      title: "Talent Pool",
      description:
        "Connect with a diverse pool of skilled developers for internships and recruitment.",
    },
    {
      icon: FaGraduationCap,
      title: "Knowledge Exchange",
      description:
        "Participate in workshops and tech talks to share industry insights.",
    },
    {
      icon: FaBriefcase,
      title: "Brand Exposure",
      description:
        "Increase your company's visibility among the next generation of tech professionals.",
    },
  ];
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Why Partner with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <benefit.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipBenefits;
