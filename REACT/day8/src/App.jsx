import { useEffect, useState } from "react";

const App = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let id = null;

    if (isTimerRunning) {
      id = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [isTimerRunning]);

  const handleStartStop = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsTimerRunning(false);
    setTimeInSeconds(0);
    setLaps([]);
  };

  const handleLap = () => {
    // Only record a lap if the timer is running
    if (isTimerRunning) {
      setLaps((prevLaps) => [...prevLaps, timeInSeconds]);
    }
  };

  const formatTime = (totalSeconds) => {
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);
    return (
      `${hours.toString().padStart(2, "0")}:` +
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}`
    );
  };

  return (
    <div className="stopwatch-container">
      <h2>{formatTime(timeInSeconds)}</h2>
      <div>
        <button onClick={handleStartStop}>
          {isTimerRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleLap} disabled={!isTimerRunning}>Lap</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {laps.length > 0 && (
        <div className="laps-container">
          <h3>Laps:</h3>
          <ol>
            {laps.map((lapTime, index) => (
              <li key={index}>
                Lap {index + 1}: {formatTime(lapTime)}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default App;