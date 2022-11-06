import TriviaCard from "./TriviaCard";
import React, { useEffect, useState } from "react";
import './TriviaQuestion.css'

export default function TriviaQuestions({ questions }) {
  const [correctArray, setCorrectArray] = useState([])
  const [count, setCount] = useState(0)

  return (
    <div className="questions">
      {questions.map((card, index) => {
        return (
          <div className = "trivia-questions">
            <TriviaCard key={index} card={card} index={index} setCorrectArray= {setCorrectArray} correctArray ={correctArray}/>
          </div>
        );
      })}
    </div>
  );
}
