import React, { useState, useEffect } from "react";

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    let timerId;
    if (running) {
      timerId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h2 style={{ fontSize: "2.5em", marginBottom: "0.3em" }}>{formatTime(time)}</h2>
      <div style={{ marginTop: "0.2em" }}>
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="テキストを入力..."
          style={{ fontSize: "1.2em", padding: "0.3em", width: "90%", boxSizing: "border-box" }}
        />
      </div>
      <div className="button-group" style={{ marginTop: "0.7em" }}>
        {!running && (
          <button className="timer-button" onClick={() => setRunning(true)}>
            ▶
          </button>
        )}
        {running && (
          <button className="timer-button" onClick={() => setRunning(false)}>
            ⏸
          </button>
        )}
        <button className="timer-button" onClick={reset}>
          ⟳
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
