import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p className="author">By {blog.author}</p>
      <p>{blog.content.substring(0, 120)}...</p>
      <Link className="btn" to={`/post/${blog.id}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;