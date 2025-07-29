import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="border dark:border-gray-700 rounded-xl shadow-lg bg-white dark:bg-gray-900 p-4 transition-transform hover:scale-[1.02]"
        >
          {blog.thumbnail && (
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
          )}

          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{blog.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            ✍️ {blog.author || "Admin"}
          </p>

          <div
            className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-3 text-sm"
            dangerouslySetInnerHTML={{
              __html: blog.content.slice(0, 150) + "...",
            }}
          />
        </div>
      ))}
    </div>
  );
}
