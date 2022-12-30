import React, {useRef} from 'react';

export default function QuestionBox({questions,optionLocked,currentQuestion}) {
  const highlightQuestion = useRef();
  return (  
    
    
// displaying questions and options and buttons for highlighting questions.


      <div className="question" >
        <h2>
          Question: {currentQuestion + 1} out of {questions.length}
        </h2>
        <h3 ref={highlightQuestion} className="text">{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                onClick={() => optionLocked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>



        <button onClick={handleFocus}>Highlight</button>
        <button onClick={handleNoFocus}>Remove Highlight</button>
    </div>

  )
  



// defining function for highlightinng questions.


  function handleFocus(){
    highlightQuestion.current.style.color = "red";
  }

  function handleNoFocus(){
    highlightQuestion.current.style.color = "black";
  }
}