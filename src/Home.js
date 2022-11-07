import Selection from "./Selection";
import TriviaQuestions from "./TriviaQuestions";
import React, { useEffect, useState } from "react";
import "./Home.css"

const Home = () => {
  const [select, setSelect] = useState("");
  const [questions, setQuestions] = useState([]);

  return (
    <div className="Home">
      <h1>Trivia Game</h1>
      <h3>Select a Category:</h3>
      <Selection select={select} setSelect={setSelect} setQuestions={setQuestions} />
      <TriviaQuestions questions={questions} />
    </div>
  );
};

export default Home;
