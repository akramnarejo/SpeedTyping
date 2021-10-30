import "./styles.css";

import React, { useState, useEffect } from "react";

function App() {
  const timespan = 60;
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(timespan);
  const [isTimeLeft, setIsTimeLeft] = useState(false);

  const handleChange = (e) => setText(e.target.value);

  const handleClick = () => {
    setIsTimeLeft(true);
    setTime(timespan);
    setText("");
    setCount(0);
  };

  useEffect(() => {
    if (isTimeLeft) {
      setTimeout(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setCount(
            text
              .trim()
              .split(" ")
              .filter((word) => word !== "").length
          );
          setIsTimeLeft(false);
        }
      }, 1000);
    }
  }, [time, isTimeLeft]);

  return (
    <div>
      <h1>How Fast Do You Type?</h1>
      <div className="status">
        <h3>
          WordsPerMinute: <span className="count">{count}</span>
        </h3>
        <h3>Time Left: {time}</h3>
      </div>
      <textarea
        className={isTimeLeft ? "gamestart" : "gameover"}
        value={text}
        rows="10"
        cols="25"
        placeholder="type here..."
        onChange={handleChange}
        disabled={!isTimeLeft}
      />

      <button onClick={handleClick} disabled={isTimeLeft}>
        {time > 0 ? "Start" : "Restart"}
      </button>
      <br />
      <footer>
        <img src="https://img.icons8.com/color/32/000000/twitter--v1.png" />
        <span>akramnarejo</span>
      </footer>
    </div>
  );
}

export default App;
