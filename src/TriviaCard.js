import React, { useState, useEffect } from "react";

function TriviaCard({ card, index }) {
  const [answerArray, setAnswerArray] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

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

  return !showAnswers ? (
    <div className="trivia-card">
      <h3>TriviaCard {index + 1}</h3>
      <h4>{card.difficulty}</h4>
      <p>{card.question}</p>
      <p onClick={() => setShowAnswers(!showAnswers)}>Select An Answer</p>
    </div>
  ) : (
    <div className="trivia-card">
      {card.type === "boolean" ? (
        <div>
          <input type="radio" id="true/false" name="boolean" value="true" />
          <label htmlFor="true">True</label>
          <br></br>
          <input type="radio" id="true/false" name="boolean" value="false" />
          <label htmlFor="false">False</label>
        </div>
      ) : (
        <div>
           <p onClick={() => setShowAnswers(!showAnswers)}>Show Question</p>
          <input
            type="radio"
            id="multiple"
            name="choice"
            value={answerArray[0]}
          />
          <label htmlFor={answerArray[0]}>{answerArray[0]}</label>
          <br></br>
          <input
            type="radio"
            id="multiple"
            name="choice"
            value={answerArray[1]}
          />
          <label htmlFor={answerArray[1]}>{answerArray[1]}</label>
          <br></br>
          <input
            type="radio"
            id="multiple"
            name="choice"
            value={answerArray[2]}
          />
          <label htmlFor={answerArray[2]}>{answerArray[2]}</label>
          <br></br>
          <input
            type="radio"
            id="multiple"
            name="choice"
            value={answerArray[3]}
          />
          <label htmlFor={answerArray[3]}>{answerArray[3]}</label>
        </div>
      )}
    </div>
  );
}

export default TriviaCard;
