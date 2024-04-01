import React, { useState } from "react";

import questions from "../helper/data";
import { arrowdown, arrowup } from "../helper/icons";

const Question = () => {
  const [clickedId, setClickedId] = useState(null);

  const handleArrow = (id) => {
 
    setClickedId(clickedId === id ? null : id);
  };

  return (
    <div>
      {questions.map((item) => {
        const { question, id } = item;

        return (
          <div className="question" key={id}>
            <div className="question-header">
              {" "}
              <p className="question-title">{question}</p>
              <p className="icons" onClick={() => handleArrow(id)}>
                {clickedId === id ? arrowup : arrowdown}
              </p>
            </div>
            <div>
              {clickedId === id && <p className="answer">{item.answer}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
