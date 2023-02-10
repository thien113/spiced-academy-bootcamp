import { React, useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleCreateUser(name, email) {
    setEmail(email);
    setName(name);
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form handleCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
