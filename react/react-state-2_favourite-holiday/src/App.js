import { React, useState } from "react";

import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setHoliday("");
    setDate("");
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          value={holiday}
          placeholder="e.g. Christmas"
          onChange={(event) => setHoliday(event.target.value)}
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
