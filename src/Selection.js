import { useState, useEffect } from "react";

const Selection = ({select, setSelect, setQuestions}) => {
   const selectObject = {
    "Books": "10",
    "Films": "11",
    "Gadgets":"30",
    "History":"23",
    "Mythology":"20",
    "Celebrities":"26",
    "Geography":"22",
   };

   const handleSelect = (e) =>{
    fetch(`https://opentdb.com/api.php?amount=10&category=${select}`)
      .then((response) => response.json())
      .then((triviaquest) => {
        setQuestions(triviaquest.results);

      })
      .catch((error) => {
        console.error(error);
      });

    let {value} = e.target
    setSelect(selectObject[value])
   };
   
  return (
    <div className="selection">
      <select onChange={handleSelect}>
        <option>---Select---</option>
        <option value="Books">Books</option>
        <option value="Films">Films</option>
        <option value="Gadgets">Gadgets</option>
        <option value="History">History</option>
        <option value="Mythology">Mythology</option>
        <option value="Celebrities">Celebrities</option>
        <option value="Geography">Geography</option>
      </select>
    </div>
  );
};

export default Selection;