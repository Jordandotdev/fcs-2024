"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", color: "#1877F2" },
    { icon: <FaTwitter />, url: "#", color: "#1DA1F2" },
    { icon: <FaInstagram />, url: "#", color: "#E4405F" },
    { icon: <FaLinkedinIn />, url: "#", color: "#0A66C2" },
    { icon: <FaGithub />, url: "#", color: "#ffffff" },
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Events", url: "#" },
    { name: "Projects", url: "#" },
    { name: "Contact", url: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
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

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <motion.div
              className=" mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/logo.png" alt="FCS Logo" />
            </motion.div>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering the next generation of fullstack developers.
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
              className="text-xl font-semibold mb-4"
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
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Newsletter
            </motion.h4>
            <motion.p
              className="text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Stay updated with our latest events and news.
            </motion.p>
            <motion.form
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-gray-500 text-white px-4 py-2 rounded-r-md hover:bg-gray-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} APIIT Fullstack Computer Society. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
