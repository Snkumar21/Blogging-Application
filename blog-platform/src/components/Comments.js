import React, { useState, useEffect } from "react";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("comments")) || {};
    setComments(all[postId] || []);
  }, [postId]);

  const addComment = () => {
    const all = JSON.parse(localStorage.getItem("comments")) || {};
    const postComments = all[postId] || [];

    postComments.push(msg);
    all[postId] = postComments;

    localStorage.setItem("comments", JSON.stringify(all));
    setComments(postComments);
    setMsg("");
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>

      <textarea
        className="textarea"
        value={msg}
        placeholder="Write a comment..."
        onChange={(e) => setMsg(e.target.value)}
      />

      <button className="btn" onClick={addComment}>Submit</button>

      {comments.map((c, i) => (
        <p className="comment" key={i}>• {c}</p>
      ))}
    </div>
  );
}

export default Comments;