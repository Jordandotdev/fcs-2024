"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", color: "#1877F2" },
    { icon: <FaTwitter />, url: "#", color: "#1DA1F2" },
    { icon: <FaInstagram />, url: "#", color: "#E4405F" },
    { icon: <FaLinkedinIn />, url: "#", color: "#0A66C2" },
    { icon: <FaGithub />, url: "#", color: "#333333" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Events", url: "/events" },
    { name: "Join us", url: "/join" },
    { name: "Contact", url: "/contact" },
  ];

  const moreInfo = [
    { name: "Industry Partnerships", url: "/industry-partnerships" },
    { name: "Event Partnerships", url: "/event-partnerships" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated background elements */}
        {[FaCode, FaLaptopCode, FaServer].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-gray-800 opacity-5"
            style={{
              fontSize: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon />
          </motion.div>
        ))}

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/logo-2.png"
                alt="FCS Logo"
                className="h-12 w-auto"
              />
            </motion.div>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering the next generation of fullstack developers. Join us in
              our mission to innovate, learn, and grow together.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2, color: link.color }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h4
              className="text-xl font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link href={link.url}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="text-xl font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              More Information
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {moreInfo.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link href={link.url}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} APIIT Fullstack Computer Society. All
            rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Developed with <FaHeart className="inline-block text-red-500" /> by
            Randil Withanage
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
