import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const data = blogs.find((b) => b.id == id);
    setBlog(data);
  }, [id]);

  if (!blog) {
    return <p className="container">Blog Not Found</p>;
  }

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <h3 className="author">By {blog.author}</h3>
      <p className="content">{blog.content}</p>

      <Link to={`/edit/${id}`} className="btn">Edit Blog</Link>
    </div>
  );
}

export default BlogView;