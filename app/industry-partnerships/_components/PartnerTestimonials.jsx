"use client";
import React from "react";
import { motion } from "framer-motion";

const PartnerTestimonials = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Partnering with APIIT FCS has given us access to a pool of talented and motivated students. It's been a game-changer for our internship program.",
                author: "Jane Doe",
                position: "HR Director, Tech Innovators Inc.",
              },
              {
                quote:
                  "The hackathon we sponsored was an incredible experience. The creativity and skill level of the students exceeded our expectations.",
                author: "John Smith",
                position: "CTO, Future Systems",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerTestimonials;
