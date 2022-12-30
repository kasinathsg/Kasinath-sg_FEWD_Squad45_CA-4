import React, {useState} from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [mode, setMode] = useState(false)
  const [displayResults, setDisplayResults] = useState(false);
  



  
// function for changing the theme
 



  const toggleMode = () => {
    setMode(!mode);
    document.querySelector('button').innerHTML = "Dark";
    document.body.style.backgroundColor = mode? "rgb(37,36,36)":"rgb(199,199,199)";
  };




  // function for updating score and going to next question
  



  const optionLocked = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setDisplayResults(true);
    }
  };



// displaying quiz




  return (
      <div className="bodyofquiz" >
        <div className="container">
          <h2 >Kalvium Quiz App</h2>    
          <button onClick={toggleMode}>{mode ? 'Dark' : 'Light'}</button>
        </div>



        {
          displayResults ? <Result setScore={setScore} score={score} setCurrentQuestion={setCurrentQuestion} setDisplayResults={setDisplayResults} length={questions.length}/> : 
          <QuestionBox questions={questions} optionLocked={optionLocked} currentQuestion={currentQuestion}/>
        }

      
      
      </div>
      


  );
}

export default App;