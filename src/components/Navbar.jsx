import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import logoLight from "../assets/hero-logo-light.svg";
import logoDark from "../assets/hero-logo-dark.svg";

const Navbar = () => {
  const navLinks = ["Home", "About", "Projects", "Contact"];

  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [activeSection, setActiveSection] = useState("Home");

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(link);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Persist & Toggle
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black text-black dark:text-white px-6 py-4 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logoDark}
            alt="Logo"
            className="block dark:hidden h-8 w-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={logoLight}
            alt="Logo"
            className="hidden dark:block h-8 w-auto transform transition-transform duration-300 hover:scale-105"
          />
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            KUNAL.
            <span className="text-rose-600 dark:text-violet-400">DEV</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          {navLinks.map((link) => (
            <li
              key={link}
              className={`relative group cursor-pointer font-semibold transition-all duration-200
              ${
                activeSection === link
                  ? "text-rose-600 dark:text-violet-400"
                  : "text-black dark:text-white"
              } hover:text-rose-600 dark:hover:text-violet-400`}
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-rose-600 dark:bg-violet-400 transition-all duration-300 ${
                  activeSection === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle Theme"
          >
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </button>
        </ul>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} aria-label="Toggle Theme">
            <motion.div
              key={isDark ? "sun-mobile" : "moon-mobile"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </motion.div>
          </button>
          {isOpen ? (
            <X
              size={28}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Slide-In */}
      <div
        className={`fixed inset-0 z-40 flex transition-all duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Slide Panel */}
        <div
          className={`relative z-50 w-64 h-full bg-white dark:bg-black text-black dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="p-6 space-y-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <li
                key={link}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer transition-colors ${
                  activeSection === link
                    ? "text-rose-600 dark:text-violet-400"
                    : ""
                } hover:text-rose-600 dark:hover:text-violet-400`}
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
