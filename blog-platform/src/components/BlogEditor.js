import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: ""
  });

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const found = blogs.find((b) => b.id == id);
    if (found) {
      setBlog(found);
    }
  }, [id]);

  const updateBlog = () => {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs = blogs.map((b) => (b.id == id ? blog : b));
    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog Updated Successfully!");
    navigate(`/post/${id}`);
  };

  return (
    <div className="container">
      <h2>Edit Blog</h2>

      <input
        className="input"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
      />

      <input
        className="input"
        value={blog.author}
        onChange={(e) => setBlog({ ...blog, author: e.target.value })}
      />

      <textarea
        className="textarea"
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
      />

      <button className="btn" onClick={updateBlog}>Update Blog</button>
    </div>
  );
}

export default BlogEditor;