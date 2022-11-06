import TriviaCard from "./TriviaCard";
import React, { useEffect, useState } from "react";

export default function TriviaQuestions({ questions }) {
  
  return (
    <div className="questions">
      {questions.map((card, index) => {
        return (
          <div>
            <TriviaCard key={index} card={card} index={index}/>
          </div>
        );
      })}
    </div>
  );
}
