import React from "react";
import "./NumberWell.css";

function NumberWell() {
  const state = {
    num1: 0,
    num2: 0
  };
  return (
    <div className="NumWell">
      <div className="NumProblem1">
        <h1>{state.num1}</h1>
        <h2>+</h2>
        <h1>{state.num2}</h1>
        <h2>____________________</h2>
        <button className="AnswerBtn">{state.num1}</button>
        <button className="AnswerBtn">{state.num2}</button>
      </div>

      <div className="NumProblem1">
        <h1>{state.num1}</h1>
        <h2>+</h2>
        <h1>{state.num2}</h1>
        <h2>____________________</h2>
        <button className="AnswerBtn">{state.num1}</button>
        <button className="AnswerBtn">{state.num2}</button>
      </div>

      <div className="NumProblem2">
        <h1>{state.num1}</h1>
        <h2>+</h2>
        <h1>{state.num2}</h1>
        <h2>____________________</h2>
        <button className="AnswerBtn">{state.num1}</button>
        <button className="AnswerBtn">{state.num2}</button>
      </div>

      <div className="NumProblem2">
        <h1>{state.num1}</h1>
        <h2>+</h2>
        <h1>{state.num2}</h1>
        <h2>____________________</h2>
        <button className="AnswerBtn">{state.num1}</button>
        <button className="AnswerBtn">{state.num2}</button>
      </div>
    </div>
  );
}

export default NumberWell;
