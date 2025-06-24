import React, { useEffect, useState } from "react";

function JournalTimeline() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/journal")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, [entries]);

  return (
    <div>
      <h2>Your Journal Timeline</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <p><strong>{new Date(entry.timestamp).toLocaleString()}</strong></p>
            <p>{entry.text}</p>
            <p><em>{entry.summary}</em></p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JournalTimeline;
