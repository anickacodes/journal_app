import React, { useState } from "react";

const RPS = () => {
  const [result, setResult] = useState(null);
  const [points, setPoints] = useState({ user: 0, cpu: 0 });
  const play = (userChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
      setResult("It's a draw!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setPoints((prevPoints) => ({ ...prevPoints, user: prevPoints.user + 2 }));
    } else {
      setResult("You lose!");
      setPoints((prevPoints) => ({ ...prevPoints, cpu: prevPoints.cpu + 2 }));
    }

    const winScheme = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winScheme[userChoice] === computerChoice) {
      setPoints((prevPoints) => ({ ...prevPoints, user: prevPoints.user + 1 }));
    }

    if (points.user >= 5) {
      setResult("Congratulations! You win the game!");
      setPoints(points);
      // You can also implement logic for giving an award to the user here
    } else if (points.cpu >= 5) {
      setResult("Sorry, you lost the game. Better luck next time!");
      setPoints(points);

      // You can also implement logic for giving an award to the CPU here
    }
  };

  // 2 points when beating scissors with rock
  // 1 point when beating rock with paper
  // 1 point when beating paper with scissors

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div>YOUR SCORE {points.user}</div>
      <div>CPU SCORE &nbsp;&nbsp; {points.cpu}</div>
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
