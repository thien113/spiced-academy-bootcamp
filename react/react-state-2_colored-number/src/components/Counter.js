import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [colorValue, setColorValue] = useState(0);
  function addColorValue() {
    setColorValue(colorValue + 1);
  }
  function subColorValue() {
    setColorValue(colorValue - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={colorValue} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={addColorValue}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={subColorValue}
        >
          -
        </button>
      </div>
    </div>
  );
}
