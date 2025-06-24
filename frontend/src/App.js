import React from "react";
import JournalForm from "./JournalForm";
import JournalTimeline from "./JournalTimeline";

function App() {
  return (
    <div className="App">
      <h1>📝 AI-Powered Daily Journal</h1>
      <JournalForm />
      <JournalTimeline />
    </div>
  );
}

export default App;
