
import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState("");

  const handleTyping = (event) => {
    const { value } = event.target.value
    setText(value)
  }

  console.log(text);

  return (
    <div>
      <h1>Speed Typers</h1>
      <textarea
        value={text}
        name="textArea"
        onChange={handleTyping}
      ></textarea>
      <h4>Time Remaining: </h4>
      <h1>Word Count: {text.length}</h1>
    </div>
  );
}

export default App;
