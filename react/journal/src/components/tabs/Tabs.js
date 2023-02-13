import "./Tabs.css";

export default function Tabs({ setIsClicked }) {
  const cards = JSON.parse(localStorage.getItem("cards") || "[]");
  function isClickedHandler(event) {
    setIsClicked(event.target.className);
  }
  return (
    <ul className="tabs">
      <h3 className="entries" onClick={isClickedHandler}>
        All Entries<span className="active">{cards.length}</span>
      </h3>
      <h3 className="favs" onClick={isClickedHandler}>
        Favorites
        <span className="disabled">
          {cards.filter((card) => card.star === true).length}
        </span>
      </h3>
    </ul>
  );
}
