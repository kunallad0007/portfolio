import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar"; // Portfolio Navbar
import BlogNav from "./components/BlogNavbar"; // Blog-specific Navbar

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import BlogPages from "./blog/BlogPage";
import BlogUpload from "./admin/BlogUpload";
import EditBlog from "./admin/EditBlog";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="bg-white dark:bg-black text-black dark:text-white scroll-smooth"
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  // ✅ Show BlogNav for /blog, /admin, /edit-blog
  const isBlogPage =
    location.pathname.startsWith("/blog") ||
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/edit-blog");

  return (
    <>
      {isBlogPage ? <BlogNav /> : <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Portfolio Home Page */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <section
                  id="home"
                  className="min-h-screen flex items-center justify-center px-4 scroll-mt-24"
                >
                  <Hero />
                </section>
                <About />
                <Projects />
                <Contact />
              </PageWrapper>
            }
          />

          {/* Blog Public Page */}
          <Route
            path="/blog/*"
            element={
              <PageWrapper>
                <BlogPages />
              </PageWrapper>
            }
          />

          {/* Admin: Blog Upload */}
          <Route
            path="/admin/blog-upload"
            element={
              <PageWrapper>
                <BlogUpload />
              </PageWrapper>
            }
          />

          {/* Admin: Edit Blog */}
          <Route
            path="/edit-blog/:id"
            element={
              <PageWrapper>
                <EditBlog />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
