import React, { useState } from "react";

const RPS = () => {
  const [result, setResult] = useState(null);
  const [points, setPoints] = useState({ user: 0, cpu: 0 });

  const play = (userChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
      setResult("It's a draw!");
      setPoints((prev) => ({
        ...prev,
        user: prev.user + 1,
        cpu: prev.cpu + 1,
      }));
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult('Winner Winner Hooray you win!!')
      setPoints((prevPoints) => ({ ...prevPoints, user: prevPoints.user + 2 }));
    } else {
      setResult('Yikes. You lost; Sorry!')
      setPoints((prevPoints) => ({ ...prevPoints, cpu: prevPoints.cpu + 2 }));
    }
  }
    const handleRoundEnd = () => {
      if (points.user >= 5) {
        setResult(<div>
          Congratulations! You win the game!
          <br />
          Your Score: {points.user} | CPU score: {points.cpu}
        </div>);
        setPoints((prevPoints) => ({ ...prevPoints, user: 0, cpu: 0 }));
      } else if (points.cpu >= 5) {
        setResult(<div>
          Sorry, you lost the game. Better luck next time!
          <br />
          Your Score: {points.user} | CPU score: {points.cpu}
        </div>);
        setPoints((prevPoints) => ({ ...prevPoints, user: 0, cpu: 0 }));
      } else {
        setResult(null);
        return;
      }
      setPoints({ user: 0, cpu: 0 });
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div className="scores_container" style={{fontSize:20, color: 'teal', fontWeight: 'bold', textShadow: 'unset'}}>
      <div>YOUR SCORE {points.user}</div>
      <div>CPU SCORE &nbsp;&nbsp; {points.cpu}</div>
      </div>
      <button
        style={{
          fontSize: "18px",
          margin: "10px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          play("rock");
          handleRoundEnd();
        }}
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
        onClick={() => {
          play("paper");
          handleRoundEnd();
        }}
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
        onClick={() => {
          play("scissors");
          handleRoundEnd();
        }}
      >
        Scissors
      </button>
      {result && (
        <div>
          <p id="result" style={{ fontSize: 19, color: 'salmon', marginTop: '10px' }}>{result}</p>
          <button
            onClick={() => {
              setPoints({ user: 0, cpu: 0 });
              setResult(null);
            }}
          >
            Play Again
          </button>
          <button
            onClick={() => {
              setResult(null);
            }}
          >
            No Thanks
          </button>
        </div>
      )}
    </div>
  );
};

export default RPS;
