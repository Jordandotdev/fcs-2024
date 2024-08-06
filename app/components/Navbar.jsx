"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    {
      name: "Partnerships",
      children: [
        { name: "Industry Partnerships", path: "/industry-partnerships" },
        { name: "Event Partnerships", path: "/event-partnerships" },
      ],
    },
    { name: "Join Us", path: "/join" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const NavLink = ({ item }) => {
    if (item.children) {
      return (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
              pathname.startsWith("/event-partnerships") ||
              pathname.startsWith("/industry-partnerships")
                ? "text-blue-600"
                : "text-gray-900 hover:text-blue-600"
            }`}
          >
            {item.name}
            <FaChevronDown className="ml-1" />
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div className="py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.path}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {child.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link href={item.path}>
        <motion.span
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            pathname === item.path
              ? "text-blue-600"
              : "text-gray-900 hover:text-blue-600"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.name}
        </motion.span>
      </Link>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-90 shadow-md py-2 backdrop-blur-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="APIIT FCS Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    alt="APIIT FCS Logo"
                    className="h-8 w-auto"
                  />
                </Link>
                <motion.button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-400 hover:text-blue-600 focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </div>
              <motion.div
                className="flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <div
                          className="px-4 py-4 border-b border-gray-100 text-gray-800 hover:bg-gray-50"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          <span className="text-lg font-medium flex items-center justify-between">
                            {item.name}
                            <FaChevronDown
                              className={`ml-2 transform transition-transform ${
                                dropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </div>
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              {item.children.map((child) => (
                                <Link key={child.name} href={child.path}>
                                  <div
                                    className="px-8 py-3 border-b border-gray-100 text-gray-600 hover:bg-gray-50"
                                    onClick={toggleMenu}
                                  >
                                    <span className="text-base">
                                      {child.name}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.path}>
                        <div
                          className={`px-4 py-4 border-b border-gray-100 ${
                            pathname === item.path
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                          onClick={toggleMenu}
                        >
                          <span className="text-lg font-medium">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
