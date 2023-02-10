import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [colorValue, setColorValue] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={colorValue} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setColorValue(colorValue + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setColorValue(colorValue - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
