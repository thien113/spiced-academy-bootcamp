import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false} />;
}
function Smiley({ isHappy }) {
  return <div>{isHappy ? <span>😁</span> : <span>🥺</span>}</div>;
}
