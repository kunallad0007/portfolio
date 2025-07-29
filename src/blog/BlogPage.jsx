// BlogPages.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";

const BlogPages = () => {
  return (
    <div className="pt-28 pb-12 min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path=":slug" element={<BlogDetails />} />
      </Routes>
    </div>
  );
};

export default BlogPages;
