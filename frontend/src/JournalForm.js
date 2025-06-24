import React, { useState } from "react";

function JournalForm() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="5"
        placeholder="Write your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default JournalForm;
