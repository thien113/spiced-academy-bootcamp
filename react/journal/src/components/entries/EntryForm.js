import "./EntryForm.css";

export default function EntryForm({ handleSubmit, handleChange, motto }) {
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
