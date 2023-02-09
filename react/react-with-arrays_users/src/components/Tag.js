import "./Tag.css";

export default function Tag({ key, tag }) {
  if (tag === "admin") {
    return (
      <li key={key} className="tag tag--highlight">
        {tag}
      </li>
    );
  } else {
    return (
      <li key={key} className="tag">
        {tag}
      </li>
    );
  }
}
