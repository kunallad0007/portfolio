// BlogUpload.jsx

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import GoogleDriveUploader from "./GoogleDriveUploader";
import { Moon, Sun } from "lucide-react";

const BlogUpload = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const getDirectImage = (url) => {
    const isDrive = url.includes("drive.google.com");
    if (isDrive) {
      const match = url.match(/\/d\/(.*?)\//);
      return match && match[1]
        ? `https://drive.google.com/uc?export=view&id=${match[1]}`
        : url;
    }
    return url;
  };

  const wordCount = content
    .replace(/<[^>]*>/g, "")
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  const handleUpload = async () => {
    if (!title || !content) {
      toast.error("Title and content are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/admin/blogs", {
        title,
        thumbnail,
        content,
        author: "Admin",
      });

      toast.success("🎉 Blog uploaded successfully!");
      setTitle("");
      setThumbnail("");
      setContent("");
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Failed to upload blog");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        {/* 🔝 Custom Top Bar */}
        <div className="flex flex-col items-center py-3 mb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-7 w-7" />
            <span className="text-2xl font-semibold tracking-wide">Span</span>
          </div>
        </div>

        {/* 🌗 Toggle Button - Bottom Right */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-4 right-4 p-3 bg-zinc-800 text-white rounded-full shadow-md hover:scale-105 transition-transform z-50"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* ✍️ Editor */}
        <motion.div
          className="max-w-6xl mx-auto px-4 pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog title here..."
            className="w-full text-4xl font-bold mb-8 bg-transparent focus:outline-none border-b border-gray-300 dark:border-gray-600 pb-2"
          />

          {/* Thumbnail Upload */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setThumbnail(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="mb-2"
            />
            <input
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder="Paste image URL or Google Drive link..."
              className="w-full bg-transparent focus:outline-none border-b border-gray-300 dark:border-gray-600 pb-2"
            />
            {thumbnail && (
              <img
                src={getDirectImage(thumbnail)}
                alt="Preview"
                className="mt-4 rounded-xl max-h-72 w-full object-cover border dark:border-gray-600"
              />
            )}
          </div>

          {/* Drive Upload Button */}
          <GoogleDriveUploader onUpload={(url) => setThumbnail(url)} />

          {/* Rich Text Editor */}
          <div className="mt-8">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your blog content here..."
              className="bg-white dark:bg-zinc-900 rounded-xl"
              style={{ minHeight: "450px" }}
            />
            <p className="mt-2 text-sm text-right text-gray-600 dark:text-gray-400">
              Word Count: {wordCount}
            </p>
          </div>

          {/* Publish Button */}
          <div className="mt-10 flex justify-end">
            <button
              onClick={handleUpload}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              🚀 Publish Blog
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogUpload;
