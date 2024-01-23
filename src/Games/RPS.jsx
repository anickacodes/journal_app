import React, { useState } from "react";

const RPS = () => {
  const [result, setResult] = useState(null);
  const [points, setPoints] = useState({ user: 0, cpu: 0 });

  const chooseWinner = (userChoice, cpuChoice) => {
    if (userChoice === cpuChoice) {
      return "draw";
    } else if (
      (userChoice === "rock" && cpuChoice === "scissors") ||
      (userChoice === "paper" && cpuChoice === "rock") ||
      (userChoice === "scissors" && cpuChoice === "paper")
    ) {
      return "user";
    } else {
      return "cpu";
    }
  };

  const play = (userChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    const winner = chooseWinner(userChoice, cpuChoice);

    setPoints((prevPoints) => {
      const newPoints = { ...prevPoints };

      if (winner === "user") {
        newPoints.user += 1;
      } else if (winner === "cpu") {
        newPoints.cpu += 1;
      } 

      if (newPoints.user === 5) {
        setResult("Congratulations, You Won the Game! 🏆");
      } else if (newPoints.cpu === 5) {
        setResult("Game Over, CPU Wins.");
      } 
      return newPoints;
    });
  };

  const resetPoints = () => {
    setPoints({ user: 0, cpu: 0 });
    setResult(null);
  };

  const style = {
    resultMessage: {
      fontSize: 19,
      color: "salmon",
      marginTop: "10px",
    },
    buttonStyle: {
      fontSize: "16px",
      margin: "10px",
      padding: "10px",
      cursor: "pointer",
    },
    scoresContainer: {
      fontSize: 20,
      color: "teal",
      fontWeight: "bold",
      textShadow: "unset",
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <div className="rps-game">
      <h1>Rock, Paper, Scissors</h1>
      <div className="scores_container" style={style.scoresContainer}>
        <div>YOUR SCORE {points.user}</div>
        <div>CPU SCORE {points.cpu}</div>
      </div>
      <button
        style={style.buttonStyle}
        onClick={() => {
          play("rock");
        }}
      >
        Rock
      </button>
      <button
        style={style.buttonStyle}
        onClick={() => {
          play("paper");
        }}
      >
        Paper
      </button>
      <button
        style={style.buttonStyle}
        onClick={() => {
          play("scissors");
        }}
      >
        Scissors
      </button>
      {result && (points.user >= 5 || points.cpu >= 5) && (
        <div>
          <p className="result-message" style={style.resultMessage}>
            {points.user >= 5
              ? "Congratulations! You win the game!"
              : "Sorry, you lost the game. Better luck next time!"}
            <br />
            Your Score: {points.user} | CPU Score: {points.cpu}
          </p>
          <button onClick={resetPoints}>Play Again</button>
          <button
            onClick={() => {
              setResult(null);
            }}
          >
            No Thanks
          </button>
        </div>
      )}
      {result && points.user < 5 && points.cpu < 5 && (
        <p className="result-message" style={style.resultMessage}>
          {result}
        </p>
      )}
    </div>
  );
};

export default RPS;
