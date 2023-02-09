import Tabs from "../tabs/Tabs";
import Star from "../star/Star";
import "./EntrySection.css";

export default function EntrySection() {
  const cards = JSON.parse(localStorage.getItem("cards") || "[]");
  function handleChangeBoolean(id) {
    //filter by card.id of array items
    const filteredCard = cards.find((card) => card.id === id);
    filteredCard["star"] = !filteredCard.star;
    /*cards.push(filteredCard);
    localStorage.setItem("cards", JSON.stringify(cards));*/
  }
  return (
    <section>
      <Tabs />
      {cards.map((card) => (
        <article key={card.id}>
          {card.star}
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
    </section>
  );
}
