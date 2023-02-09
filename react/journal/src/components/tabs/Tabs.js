import "./Tabs.css";

export default function Tabs() {
  const cards = JSON.parse(localStorage.getItem("cards") || "[]");

  return (
    <ul className="tabs">
      <h3 className="entries">
        All Entries<span className="active">{cards.length}</span>
      </h3>
      <h3 className="favs">
        Favorites
        <span className="disabled">
          {cards.filter((card) => card.star === true).length}
        </span>
      </h3>
    </ul>
  );
}
