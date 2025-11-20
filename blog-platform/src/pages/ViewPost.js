import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";

function ViewPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const data = blogs.find(b => b.id == id);
    setBlog(data);
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <h4 className="author">By {blog.author}</h4>
      <p className="content">{blog.content}</p>

      <Comments postId={id} />
    </div>
  );
}

export default ViewPost;