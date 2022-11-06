import React, { useState, useEffect } from "react";
import "./TriviaCard.css"

function TriviaCard({ card, index }) {
  const [answerArray, setAnswerArray] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const[boolean,setBoolean] = useState(false)
  const [userSelection, setUserSelection] = useState('')

  useEffect(() => {
    let array = [card.correct_answer, ...card.incorrect_answers];
    const shuffle = (array) => {
      let currentIndex = array.length;
      let randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    };
    setAnswerArray(shuffle(array));
  }, []);


  const handleChange = (e)=>{
    setUserSelection(e.target.value)
    console.log(e.target.value)
    
  }

  const handleClick = (e) =>{
    console.log(e)
    setShowAnswers(!showAnswers)
    if(userSelection.toLowerCase() === card.correct_answer.toLowerCase()){
      setBoolean(true)
    }else{
      setBoolean(false)
    }
  }
  console.log(userSelection, card.correct_answer)
  console.log(boolean)


return !showAnswers ? 
(
  <div className={`trivia-card ${showAnswers}`}  >
      <h3>TriviaCard {index + 1}</h3>
      <h6>{card.difficulty}</h6>
      <p>{card.question}</p>
    
    {card.type === "boolean" ? (
      <div onClick = {handleChange}>
        <input type="radio" id="true/false" name={`boolean ${index+1}`} value="true" />
        <label htmlFor="true">True</label>
        <br></br>
        <input type="radio" id="true/false" name={`boolean ${index+1}`} value="false" />
        <label htmlFor="false">False</label>
        <br></br>
        <button onClick={handleClick}>Submit</button>
      </div>
    ) : (
      <div onClick = {handleChange}>
        <label htmlFor={answerArray[0]}>{answerArray[0]}
        <input
          type="radio"
          id="multiple"
          name={`choice${index+1}`}
          value={answerArray[0]}
        />
        </label>
        <br></br>
        <label htmlFor={answerArray[1]}>{answerArray[1]}
        <input
          type="radio"
          id="multiple"
          name={`choice${index+1}`}
          value={answerArray[1]}
        />
        </label>
        <br></br>
        <label htmlFor={answerArray[2]}>{answerArray[2]}
        <input
          type="radio"
          id="multiple"
          name={`choice${index+1}`}
          value={answerArray[2]}
        />
        </label>
        <br></br>
        <label htmlFor={answerArray[3]}>{answerArray[3]}
        <input
          type="radio"
          id="multiple"
          name={`choice${index+1}`}
          value={answerArray[3]}
        />
        </label>
        <br></br>
        <button onClick={handleClick}>Submit</button>
        
   </div>
)}
</div>
)
:
(
<div className={`trivia-card ${showAnswers}`}>  
  <h3>TriviaCard {index + 1}</h3>
  <h6>{card.difficulty}</h6>
  {(boolean) ?<h2 id = "green">CORRECT</h2>: <h2 id ="red">INCORRECT</h2>}
  <p>{card.question}</p>
  <h4>{card.correct_answer}</h4>
  </div>
)

}

export default TriviaCard;
