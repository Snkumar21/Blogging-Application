import React, { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(items);
  }, []);

  return (
    <div className="container">
      <h1>Latest Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Home;