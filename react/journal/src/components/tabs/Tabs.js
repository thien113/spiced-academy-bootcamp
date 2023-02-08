import "./Tabs.css";

export default function Tabs() {
  return (
    <ul className="tabs">
      <h3 className="entries">
        All Entries<span className="active">3</span>
      </h3>
      <h3 className="favs">
        Favorites<span className="disabled">1</span>
      </h3>
    </ul>
  );
}
