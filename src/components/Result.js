import React from 'react'

export default function Result({setScore,score, setCurrentQuestion, setDisplayResults, length}) {
  
// Defining function for restarting the game.

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setDisplayResults(false);
  };


  // Displaying final results page which consists of score and restart button.

  return (
    <div className="final-results">
      <h1>Score</h1>
      <h2>
        {score} | {length} correct
      </h2>
      <button onClick={() => restartQuiz()}>Restart Quiz</button>
  </div>
  )
}