import { useState } from "react";
import "./App.css";

function App() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);

  // Possible runs on every ball
  const scoreArray = [0, 1, 2, 3, 4, 6];

  const hitBall = () => {
    if (balls < 6) {
      const randomRun =
        scoreArray[Math.floor(Math.random() * scoreArray.length)];

      setRuns(runs + randomRun);
      setBalls(balls + 1);
    }
  };

  const resetGame = () => {
    setBalls(0);
    setRuns(0);
  };

  return (
  <div className="container">
    <div className="score-board">
      <h1>Cricket Score Board</h1>

      <h2>Balls : {balls}</h2>

      <h2>Runs : {runs}</h2>
    </div>

    <p className="info">
      You get total of 6 balls (1 over). The button gets disabled after that
    </p>

    <div className="buttons">
      <button onClick={hitBall} disabled={balls === 6}>
        Click to hit the ball
      </button>

      <button onClick={resetGame}>
        Reset Game
      </button>
    </div>
  </div>
  );
}

export default App;