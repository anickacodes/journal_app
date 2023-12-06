import React, { useState } from "react";

const RPS = () => {

    const [result, setResult] = useState(null)
  const play = (userChoice) => {
    
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
      console.log(`USER: ${userChoice} VS CPU: ${computerChoice}`);
      setResult("It's a draw!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`USER: ${userChoice} VS CPU: ${computerChoice}`);
      setResult("You win!");
    } else {
      console.log(`USER: ${userChoice} VS CPU: ${computerChoice}`);
      setResult("You lose!");
    }
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <button
        style={{
          fontSize: "18px",
          margin: "10px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => play("rock")}
      >
        Rock
      </button>
      <button
        style={{
          fontSize: "18px",
          margin: "10px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => play("paper")}
      >
        Paper
      </button>
      <button
        style={{
          fontSize: "18px",
          margin: "10px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => play("scissors")}
      >
        Scissors
      </button>
      <p id="result">{result}</p>
    </div>
  );
};

export default RPS;
