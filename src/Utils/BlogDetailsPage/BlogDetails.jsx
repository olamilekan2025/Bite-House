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
      <div className="blog-detailstextContext">
        <div className="blog-btn-name">
          <h1>
            <Link to="/blog" className="blog-details-back-btn">
              ←
            </Link>
            {post.title}
          </h1>
        </div>
        <p className="meta">
          {post.date} • {post.author}
        </p>
        <p className="content">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
