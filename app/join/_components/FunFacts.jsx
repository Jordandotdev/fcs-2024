"use client";
import React from "react";
import { motion } from "framer-motion";

const FunFacts = () => {
  const funFacts = [
    {
      title: "24/7 Tech Support",
      description: "Our community never sleeps! Get help anytime, anywhere.",
      image: "/images/24-7-support.jpg",
    },
    {
      title: "1000+ Lines of Code",
      description:
        "On average, our members write over 1000 lines of code per week!",
      image: "/images/code-lines.jpg",
    },
    {
      title: "Global Connections",
      description:
        "FCS members have connected with peers from over 50 countries!",
      image: "/images/global-connections.jpg",
    },
  ];
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Fun Facts About FCS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={fact.image}
                  alt={fact.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600">{fact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunFacts;
