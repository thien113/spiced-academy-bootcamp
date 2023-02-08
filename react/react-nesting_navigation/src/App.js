import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";

export default function App() {
  const linksArray = [
    { id: 1, name: "home", href: "#home" },
    { id: 2, name: "about", href: "#about" },
    { id: 3, name: "impressum", href: "#impressum" },
  ];
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          {linksArray.map((item) => (
            <Link href={item.href}>{item.name}</Link>
          ))}
        </Navigation>
        <Avatar />
      </Header>
      <main></main>
    </>
  );
}
