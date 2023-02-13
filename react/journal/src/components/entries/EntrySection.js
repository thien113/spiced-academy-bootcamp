import { useState } from "react";
import Tabs from "../tabs/Tabs";
import Star from "../star/Star";
import "./EntrySection.css";

export default function EntrySection({ setMotto }) {
  const cards = JSON.parse(localStorage.getItem("cards") || "[]");
  const favsCards = cards.filter((card) => card.star === true);
  const [isClicked, setIsClicked] = useState(false);
  function handleChangeBoolean(id) {
    //filter by card.id of array items
    const filteredCard = cards.find((card) => card.id === id);
    filteredCard["star"] = !filteredCard.star;

    setMotto(
      cards.map((card) => {
        if (card.id === filteredCard.id) {
          return filteredCard;
        } else {
          return card;
        }
      })
    );
    // update cards by deleting old and pass new ones
    localStorage.removeItem("cards");
    localStorage.setItem("cards", JSON.stringify(cards));
  }
  return (
    <section>
      <Tabs setIsClicked={setIsClicked} />
      {(isClicked === "entries" || isClicked === false) &&
        cards.map((card) => (
          <article key={card.id}>
            <h4>{card.date}</h4>
            <div className="title">
              <h2>
                <strong>"{card.motto}"</strong>
              </h2>
              <Star
                starType={card.star}
                id={card.id}
                handleChange={handleChangeBoolean}
              />
            </div>
            <p>{card.notes}</p>
          </article>
        ))}
      {isClicked === "favs" &&
        favsCards.map((card) => (
          <article key={card.id}>
            <h4>{card.date}</h4>
            <div className="title">
              <h2>
                <strong>"{card.motto}"</strong>
              </h2>
              <Star starType={card.star} id={card.id} />
            </div>
            <p>{card.notes}</p>
          </article>
        ))}
    </section>
  );
}
