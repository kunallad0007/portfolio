import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
        🚀 Explore Our Latest Blogs
      </h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500 text-center">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-transform hover:scale-[1.02] border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {blog.title}
                </h2>

                <p
                  className="text-gray-600 dark:text-gray-300 text-sm mb-3"
                  dangerouslySetInnerHTML={{
                    __html: blog.content.slice(0, 100) + "...",
                  }}
                />

                <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-4">
                  ✍️ By {blog.author || "Admin"}
                </p>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>

                  <Link
                    to={`/edit-blog/${blog._id}`}
                    className="text-sm text-white bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700"
                  >
                    ✏️ Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
