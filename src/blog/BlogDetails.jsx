import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading)
    return <div className="text-center py-20 text-lg font-medium">⏳ Loading blog...</div>;

  if (!post)
    return <div className="text-center py-20 text-lg font-semibold text-red-500">❌ Blog not found.</div>;

  return (
    <section className="min-h-screen px-6 py-20 max-w-3xl mx-auto bg-white dark:bg-black text-black dark:text-white">
      {/* Thumbnail */}
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="rounded-xl mb-8 w-full max-h-96 object-cover shadow-lg"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
        {post.title}
      </h1>

      {/* Author & Meta */}
      <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6">
        ✍️ By {post.author || "Admin"}
      </p>

      {/* Main Content */}
      <article
        className="prose dark:prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
};

export default BlogDetails;
