import { useState } from "react";
import "./Tabs.css";

export default function Tabs({ setIsClicked }) {
  const cards = JSON.parse(localStorage.getItem("cards") || "[]");
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("disabled");
  function isClickedHandler(event) {
    setIsClicked(event.target.className);
    if (event.target.className === "entries") {
      setActive1("active");
      setActive2("disabled");
    }
    if (event.target.className === "favs") {
      setActive1("disabled");
      setActive2("active");
    }
  }
  return (
    <>
      <ul className="tabs">
        <h3 className="entries" onClick={isClickedHandler}>
          All Entries
          <span className={`${active1} ? "active" : ""}`}>{cards.length}</span>
        </h3>
        <h3 className="favs" onClick={isClickedHandler}>
          Favorites
          <span className={`${active2} ? "active" : ""}`}>
            {cards.filter((card) => card.star === true).length}
          </span>
        </h3>
      </ul>
    </>
  );
}
