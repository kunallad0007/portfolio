import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnail: "",
    author: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch blog data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => {
        setFormData(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch blog data");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content || !formData.author) {
      return toast.error("Please fill all required fields");
    }

    axios
      .patch(`http://localhost:5000/api/blogs/${id}`, formData)
      .then(() => {
        toast.success("Blog updated successfully!");
        setTimeout(() => {
          navigate("/blog");
        }, 800);
      })
      .catch(() => toast.error("Update failed, try again."));
  };

  if (loading)
    return (
      <div className="text-center py-20 dark:text-white">Loading blog...</div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Edit Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />

          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Blog Content"
            required
            rows={10}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />

          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Thumbnail URL"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author Name"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
