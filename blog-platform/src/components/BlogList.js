import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.length === 0 ?
        <p>No blogs yet. Create one!</p> :
        blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))
      }
    </div>
  );
}

export default BlogList;