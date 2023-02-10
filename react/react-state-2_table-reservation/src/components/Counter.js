export default function Counter({
  onSubbPeopleHandle,
  onAddPeopleHandle,
  people,
}) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <p>{people}</p>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAddPeopleHandle}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubbPeopleHandle}
        >
          -
        </button>
      </div>
    </>
  );
}
