import { useState } from "react";
import "./CatchMe.css";

function CatchMe({ isInProgress, score, setScore }) {
  const [marginLeft, setMarginLeft] = useState(45);
  const [marginTop, setMarginTop] = useState(45);
  const [backgroundColor, setBackgroundColor] = useState(
    Math.floor(Math.random() * 16777215).toString(16)
  );

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function moveButton() {
    setMarginLeft(getRandomInt(10, 90));
    setMarginTop(Math.random() * 400);
    setBackgroundColor(Math.floor(Math.random() * 16777215).toString(16));
    setScore(score + 1);
  }

  return (
    <button
      className='catchme'
      style={{
        marginLeft: `${marginLeft}%`,
        marginTop: `${marginTop}px`,
        marginBottom: "auto",
        marginRight: "auto",
        background: `#${backgroundColor}`,
        pointerEvents: `${isInProgress ? "auto" : "none"}`,
        position: "fixed",
      }}
      onMouseOver={moveButton}
    >
      Catch me
    </button>
  );
}

export default CatchMe;
