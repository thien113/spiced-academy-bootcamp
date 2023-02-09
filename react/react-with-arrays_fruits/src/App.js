import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1237,
      name: "🍐 Pear",
      color: "green",
    },
    {
      id: 1437,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 1387,
      name: "🍒 Cherries",
      color: "red",
    },
    {
      id: 2337,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1337,
      name: "🫐 Blueberries",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
