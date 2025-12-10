"use client";

import { useState } from "react";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  async function addComment() {
    setComments([...comments, text]);
    setText("");
  }

  return (
    <div>
      <h3>Comments</h3>

      {comments.map((c, i) => (
        <p key={i}>{c}</p>
      ))}

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addComment}>Add</button>
    </div>
  );
}
