import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import logoLight from "../assets/hero-logo-light.svg";
import logoDark from "../assets/hero-logo-dark.svg";

const BlogNavbar = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

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
    <>
      {/* Top Blog Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white dark:bg-black shadow-md transition">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-black dark:text-white">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoDark} alt="Logo" className="block dark:hidden h-8 w-auto" />
            <img src={logoLight} alt="Logo" className="hidden dark:block h-8 w-auto" />
            <span className="text-xl md:text-2xl font-bold tracking-wide">
              KUNAL.<span className="text-rose-600 dark:text-violet-400">BLOG</span>
            </span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* 🔘 Floating Portfolio Button */}
      <div className="z-40 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="fixed bottom-6 left-6 z-40"
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
              <span className="inline-block animate-pulse group-hover:hidden">⛩</span>
              <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap transition-all duration-300">
                Visit My Portfolio
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default BlogNavbar;
