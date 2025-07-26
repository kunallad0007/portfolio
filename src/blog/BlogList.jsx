// src/blog/BlogList.jsx
import React from "react";
import { blogPosts } from "./blogData";
import BlogCard from "../components/BlogCard";

const BlogList = () => (
  <section className="min-h-screen py-20 px-4 bg-white dark:bg-black">
    <h1 className="text-4xl font-bold text-center mb-12">📝 All Blogs</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  </section>
);

export default BlogList;
