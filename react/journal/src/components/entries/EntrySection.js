import Tabs from "../tabs/Tabs";
import Star from "../star/Star";
import "./EntrySection.css";

export default function EntrySection() {
  const cards = JSON.parse(localStorage.getItem("cards") || "[]");
  function handleChangeBoolean(id) {
    //filter by index of array items
    const filteredCard = cards.filter((_, index) => index === id);
    // its an array therefore foreach to read values
    filteredCard.forEach((filtered) => {
      console.log("filteredCard star attribute is: ", filtered.star);
    });
  }
  return (
    <section>
      <Tabs />
      {cards.map((card, id) => (
        <article key={id}>
          {card.star}
          <h4>{card.date}</h4>
          <div className="title">
            <h2>
              <strong>"{card.motto}"</strong>
            </h2>
            <Star
              starType={card.star}
              id={id}
              handleChange={handleChangeBoolean}
            />
          </div>
          <p>{card.notes}</p>
        </article>
      ))}
    </section>
  );
}
