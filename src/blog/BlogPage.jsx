import React from "react";
import BlogCard from "../components/BlogCard";
import posts from "./posts";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 px-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <Navbar />

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10">📝 My Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
