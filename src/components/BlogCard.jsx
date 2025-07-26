import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ title, slug, summary, cover }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <Link to={`/blog/${slug}`}>
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 group">
        <img
          src={cover}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-violet-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default BlogCard;
