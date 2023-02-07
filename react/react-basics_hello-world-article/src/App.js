import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}
function HelloWorldArticle() {
  return (
    <article>
      <h1>Article Title</h1>
      <p>Article some text</p>
    </article>
  );
}
