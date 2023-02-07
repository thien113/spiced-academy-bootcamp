import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="red" isDisabled={true} text="A cool Button" />;
}
function Button({ color, isDisabled, text }) {
  return (
    <button style={{ color: color }} disabled={isDisabled}>
      {text}
    </button>
  );
}
