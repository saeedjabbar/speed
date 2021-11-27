import React, { useState, useEffect } from "react"

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [gameStatus, setGameStatus] = useState(false)

  function handleChange(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function handleGameStatus(gameStatus){
    setGameStatus(prevStatus => (!prevStatus))
  }

  useEffect(() => {
    if (timeRemaining > 0 && gameStatus) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
  }, [timeRemaining, gameStatus])


  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => handleGameStatus(gameStatus)}>Start</button>
      <h1 onChange={calculateWordCount(text)}>Word count: ???</h1>
    </div>
  )
}

export default App
