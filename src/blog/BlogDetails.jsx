// src/blog/BlogDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <section className="min-h-screen px-6 py-20 max-w-3xl mx-auto bg-white dark:bg-black text-black dark:text-white">
      <img src={post.cover} alt={post.title} className="rounded-xl mb-6 w-full max-h-96 object-cover" />
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
      <article className="prose dark:prose-invert prose-lg">{post.content.split("\n").map((line, i) => <p key={i}>{line}</p>)}</article>
    </section>
  );
};

export default BlogDetails;
