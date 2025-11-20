import React, { useState } from "react";

function Create() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: ""
  });

  const saveBlog = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const newBlog = { ...form, id: Date.now() };
    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    alert("Blog Created Successfully!");
  };

  return (
    <div className="container">
      <h2>Create a Blog</h2>

      <input
        className="input"
        placeholder="Blog Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        className="input"
        placeholder="Author Name"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <textarea
        className="textarea"
        placeholder="Write your blog..."
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button className="btn" onClick={saveBlog}>Publish</button>
    </div>
  );
}

export default Create;