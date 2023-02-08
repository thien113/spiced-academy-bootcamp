import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form>
      <label for="motto">Motto</label>
      <textarea
        className="textarea"
        name="motto"
        id="motto"
        rows="4"
        cols="50"
      ></textarea>
      <label for="notes">Notes</label>
      <textarea name="notes" id="notes" rows="6" cols="50"></textarea>
      <button>Create</button>
    </form>
  );
}
