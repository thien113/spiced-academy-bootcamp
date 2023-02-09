import { useState } from "react";
import "./EntryForm.css";

export default function EntryForm() {
  let arrayLength = JSON.parse(localStorage.getItem("cards") || "[]");
  const [motto, setMotto] = useState({
    id: arrayLength.length + 1,
    motto: "",
    notes: "",
    date: new Date(),
    star: false,
  });

  const handleChange = (event) => {
    //spread operator to keep old values
    //can target multiple inputs because of event.target.name
    setMotto({ ...motto, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let cards = JSON.parse(localStorage.getItem("cards") || "[]");
    cards.push(motto);
    localStorage.setItem("cards", JSON.stringify(cards));
    setMotto({
      id: cards.length,
      motto: "",
      notes: "",
      date: new Date(),
      star: false,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="motto">Motto</label>
      <textarea
        onChange={handleChange}
        className="textarea"
        name="motto"
        id="motto"
        rows="4"
        cols="50"
        value={motto.motto}
      ></textarea>
      <label htmlFor="notes">Notes</label>
      <textarea
        onChange={handleChange}
        name="notes"
        id="notes"
        rows="6"
        cols="50"
        value={motto.notes}
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
}
