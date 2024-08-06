"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const IndustryPartnershipsPage = () => {
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
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Industry Partnerships
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Collaborate with APIIT FCS to shape the future of tech talent
          </motion.p>
        </div>
      </section>

      {/* Partnership Benefits */}
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

      {/* Partnership Opportunities */}
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

      {/* Testimonials */}
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

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-400 to-purple-400 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Partner with APIIT FCS?
          </h2>
          <p className="text-xl mb-10 text-white">
            Join us in shaping the future of tech education and innovation.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default IndustryPartnershipsPage;
