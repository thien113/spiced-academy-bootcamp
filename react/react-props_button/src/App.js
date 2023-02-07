import React from "react";
import "./styles.css";

export default function App() {
  let blueCounter = 0;
  let redCounter = 0;
  let greenCounter = 0;
  function handleClick(color) {
    console.log(`${color} button had been clicked!`);
    if (color === "blue") {
      blueCounter++;
    } else if (color === "red") {
      redCounter++;
    } else {
      greenCounter++;
    }
  }
  return (
    <div>
      <Button
        color="red"
        isDisabled={false}
        text="A Red Button"
        onClick={handleClick}
      />
      <Button
        color="green"
        isDisabled={false}
        text="A Green Button"
        onClick={handleClick}
      />
      <Button
        color="blue"
        isDisabled={false}
        text="A Blue Button"
        onClick={handleClick}
      />
      <h2>BlueCounter: {blueCounter}</h2>
      <h2>RedCounter: {redCounter}</h2>
      <h2>GreenCounter: {greenCounter}</h2>
    </div>
  );
}
function Button({ color, isDisabled, text, onClick }) {
  return (
    <button
      style={{ color: color }}
      disabled={isDisabled}
      onClick={() => {
        onClick(color);
      }}
    >
      {text}
    </button>
  );
}
/*
onClick={onClick(color)} -> man kann kein funktionsruf innerhalb der {} machen
man muss innerhalb von {} -> normal die funktion aufrufen mit
{ function myFunction(parameter){
  ...logic
}}
*/
