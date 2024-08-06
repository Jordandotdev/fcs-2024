"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMicrophone,
  FaLaptopCode,
  FaTrophy,
  FaUsers,
  FaBullhorn,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const EventPartnershipsPage = () => {
  const eventTypes = [
    {
      icon: FaMicrophone,
      title: "Tech Talks",
      description:
        "Inspire the next generation of developers with industry insights.",
    },
    {
      icon: FaLaptopCode,
      title: "Hackathons",
      description:
        "Challenge students to solve real-world problems in intensive coding events.",
    },
    {
      icon: FaUsers,
      title: "Workshops",
      description:
        "Provide hands-on learning experiences in cutting-edge technologies.",
    },
    {
      icon: FaTrophy,
      title: "Coding Competitions",
      description: "Sponsor exciting coding challenges to identify top talent.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500"
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
            Event Partnerships
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Create impactful tech events with APIIT FCS
          </motion.p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Events We Can Create Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <event.icon className="text-4xl text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Engaged Audience",
                description:
                  "Access a community of passionate tech enthusiasts and future innovators.",
              },
              {
                icon: FaBullhorn,
                title: "Brand Visibility",
                description:
                  "Showcase your brand to a targeted audience of tech-savvy students and professionals.",
              },
              {
                icon: FaHandshake,
                title: "Meaningful Impact",
                description:
                  "Contribute to the growth and development of the next generation of tech talent.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center"
                whileHover={{ y: -10 }}
              >
                <benefit.icon className="text-5xl text-green-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Showcase */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Our Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Hackathon 2023",
                description:
                  "A 48-hour coding marathon focused on artificial intelligence solutions.",
                image: "/images/ai-hackathon.jpg",
              },
              {
                title: "Web3 Workshop Series",
                description:
                  "A month-long series of workshops exploring blockchain and decentralized applications.",
                image: "/images/web3-workshop.jpg",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Partnering with APIIT FCS for our annual hackathon was a fantastic experience. The energy and creativity of the students were truly inspiring.",
                author: "Sarah Johnson",
                position: "Events Manager, TechCorp",
              },
              {
                quote:
                  "The workshop series we conducted with APIIT FCS helped us connect with bright, enthusiastic students who are now part of our internship program.",
                author: "Michael Chen",
                position: "Head of University Relations, InnovateTech",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
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
      <section className="bg-gradient-to-r from-green-400 to-blue-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Create an Unforgettable Event?
          </h2>
          <p className="text-xl mb-10 text-white">
            Let's collaborate to bring your vision to life and inspire the tech
            community.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Propose an Event
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default EventPartnershipsPage;
