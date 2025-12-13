import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../../../src/blogPosts";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();

  // 🔥 Convert id to number
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found</h2>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-details">
      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      <p className="meta">{post.date} • {post.author}</p>
      <p className="content">{post.content}</p>

      <Link to="/blog" className="back-btn">
        ← 
      </Link>
    </div>
  );
};

export default BlogDetails;
