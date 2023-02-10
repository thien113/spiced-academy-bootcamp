import { useState } from "react";
import EntryForm from "../entries/EntryForm";
import EntrySection from "../entries/EntrySection";
import "./Main.css";
export default function Main() {
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
    <main>
      <EntryForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        motto={motto}
      />
      <EntrySection setMotto={setMotto} />
    </main>
  );
}
//handleSubmit, handleChange, motto
