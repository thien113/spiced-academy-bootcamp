import Card from "./components/Card";

export default function App() {
  const fruits = [
    "🍐 Pear",
    "🍑 Peach",
    "🍒 Cherries",
    "🍓 Strawberry",
    "🫐 Blueberries",
  ];

  return (
    <div className="app">
      {fruits.map((fruit, key) => (
        <Card key={key} name={fruit} />
      ))}
    </div>
  );
}
