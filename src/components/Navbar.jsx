import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoLight from "../assets/hero-logo-light.svg";
import logoDark from "../assets/hero-logo-dark.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";
  const navLinks = ["Home", "About", "Projects", "Blog", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [activeSection, setActiveSection] = useState("Home");

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

  // Portfolio Nav Scroll Spy
  useEffect(() => {
    if (!isBlogPage) {
      const handleScroll = () => {
        const scrollPos = window.scrollY + 100;
        navLinks.forEach((link) => {
          if (link === "Blog") return;
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
    }
  }, [isBlogPage]);

  // ---------------------
  // PORTFOLIO NAV
  // ---------------------
  const PortfolioNav = () => (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white dark:bg-black shadow-md transition"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black dark:text-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logoDark}
            alt="Logo"
            className="block dark:hidden h-8 w-auto"
          />
          <img
            src={logoLight}
            alt="Logo"
            className="hidden dark:block h-8 w-auto"
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
              className={`relative group cursor-pointer font-semibold transition-all duration-200 ${
                activeSection === link
                  ? "text-rose-600 dark:text-violet-400"
                  : "text-black dark:text-white"
              } hover:text-rose-600 dark:hover:text-violet-400`}
            >
              {link === "Blog" ? (
                <Link to="/blog">{link}</Link>
              ) : (
                <span
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const section = document.getElementById(
                        link.toLowerCase()
                      );
                      if (section)
                        section.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  {link}
                </span>
              )}
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
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </ul>

        {/* Mobile Nav Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-black px-6 py-4 rounded-md shadow-lg">
          <ul className="space-y-4 text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link} onClick={() => setIsOpen(false)}>
                {link === "Blog" ? (
                  <Link
                    to="/blog"
                    className="block hover:text-rose-600 dark:hover:text-violet-400"
                  >
                    {link}
                  </Link>
                ) : (
                  <span
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        const section = document.getElementById(
                          link.toLowerCase()
                        );
                        if (section)
                          section.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className={`block hover:text-rose-600 dark:hover:text-violet-400 ${
                      activeSection === link
                        ? "text-rose-600 dark:text-violet-400"
                        : ""
                    }`}
                  >
                    {link}
                  </span>
                )}
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );

  // ---------------------
  // BLOG NAV
  // ---------------------
  const BlogNav = () => (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white dark:bg-black shadow-md transition">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-black dark:text-white">
          {/* Just Logo and Theme */}
          <div className="flex items-center space-x-3">
            <img
              src={logoDark}
              alt="Logo"
              className="block dark:hidden h-8 w-auto"
            />
            <img
              src={logoLight}
              alt="Logo"
              className="hidden dark:block h-8 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold tracking-wide">
              KUNAL.
              <span className="text-rose-600 dark:text-violet-400">BLOG</span>
            </span>
          </div>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <Link to="/">
          <motion.div
            whileHover={{
              width: "200px",
              borderRadius: "2rem",
              rotate: 360,
              backgroundColor: isDark ? "#f4f4f5" : "#0f0f0f",
              color: isDark ? "#0f0f0f" : "#f4f4f5",
            }}
            initial={{
              width: "48px",
              height: "48px",
              borderRadius: "9999px",
            }}
            animate={{
              width: "48px",
              height: "48px",
              borderRadius: "9999px",
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 10,
            }}
            className={`flex items-center justify-center shadow-xl text-xs sm:text-sm px-3 h-12 
              font-bold uppercase tracking-wider cursor-pointer overflow-hidden relative group
              bg-gradient-to-tr ${
                isDark
                  ? "from-white to-zinc-200 text-black"
                  : "from-black to-zinc-800 text-white"
              }
              after:content-[''] after:absolute after:inset-0 after:rounded-full after:animate-ping 
              after:bg-gradient-to-tr after:from-rose-500/20 after:to-violet-500/20
            `}
          >
            <span className="inline-block animate-pulse group-hover:hidden">
              ⛩
            </span>
            <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap transition-all duration-300">
              Visit My Portfolio
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );

  return isBlogPage ? <BlogNav /> : <PortfolioNav />;
};

export default Navbar;
