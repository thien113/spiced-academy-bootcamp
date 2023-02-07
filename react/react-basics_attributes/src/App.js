import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}
function Article() {
  const article__title = "Empire of Zul";
  return (
    <article className="article">
      <h2>{article__title}</h2>
      <label htmlFor="name"></label>
      <input id="name" />
      <a
        className="article__link"
        href="https://wowpedia.fandom.com/wiki/Empire_of_Zul"
      >
        Link to Wow-Fanpage
      </a>
    </article>
  );
}
