"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const PartnershipOppurtunities = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hackathon Sponsorship",
                description:
                  "Sponsor our annual hackathon and engage with innovative projects.",
                icon: FaRocket,
              },
              {
                title: "Mentorship Program",
                description:
                  "Provide industry mentors to guide students on real-world projects.",
                icon: FaGraduationCap,
              },
              {
                title: "Internship Pipeline",
                description:
                  "Get priority access to our pool of talented interns and graduates.",
                icon: FaBriefcase,
              },
            ].map((opportunity, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center"
                whileHover={{ y: -10 }}
              >
                <opportunity.icon className="text-5xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  whileHover={{ x: 5 }}
                >
                  Learn More <FaArrowRight className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipOppurtunities;
