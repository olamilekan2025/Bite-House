import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  {
    id: 1,
    title: "10 Healthy Meals You Can Cook in 30 Minutes",
    excerpt:
      "Busy day? These healthy meals are quick, delicious, and perfect for your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    date: "Dec 10, 2025",
    author: "BiteHouse",
  },
  {
    id: 2,
    title: "Why Fresh Ingredients Matter",
    excerpt:
      "Fresh ingredients don’t just taste better — they improve your health and energy.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    date: "Dec 8, 2025",
    author: "BiteHouse",
  },
  {
    id: 3,
    title: "Top Nigerian Dishes Everyone Loves",
    excerpt:
      "From Jollof rice to Suya, here are the Nigerian dishes that steal hearts.",
    image:
      "https://images.unsplash.com/photo-1604908177522-402afc8b8b0d",
    date: "Dec 5, 2025",
    author: "BiteHouse",
  },
  {
    id: 4,
    title: "How to Eat Healthy on a Budget",
    excerpt:
      "You don’t need to break the bank to eat healthy. Here are smart food tips that save money.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    date: "Dec 3, 2025",
    author: "BiteHouse",
  },
  {
    id: 5,
    title: "Best Breakfast Ideas to Start Your Day",
    excerpt:
      "Kick-start your morning with these energizing and delicious breakfast ideas.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    date: "Dec 1, 2025",
    author: "BiteHouse",
  },
  {
    id: 6,
    title: "Street Food vs Home Cooking: Which Is Better?",
    excerpt:
      "We compare taste, cost, and health benefits of street food and home-cooked meals.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    date: "Nov 28, 2025",
    author: "BiteHouse",
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-container">

        <header className="blog-header">
          <span>Our Blog</span>
          <p>Food tips, healthy living, and delicious inspiration</p>
        </header>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-tag">Food</span>
              </div>

              <div className="blog-content">
                <span className="blog-meta">
                  {post.date} • {post.author}
                </span>

                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>

                {/* ✅ Read More Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="read-more-btn"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
