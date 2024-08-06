"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = ({ testimonials }) => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
        What Our Partners Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
