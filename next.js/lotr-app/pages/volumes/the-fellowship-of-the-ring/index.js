import { volumes } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";

import picture from "../../../public/images/the-fellowship-of-the-ring.png";

export default function TheFellowshipOfTheRing() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const bookArray = book.books;
  return (
    <>
      <h1>{book.title}</h1>
      <Link href="/">Home</Link>
      <Link href="/volumes">All Volumes</Link>
      <p>{book.description}</p>
      <ul>
        {bookArray.map((book) => (
          <li>
            {book.ordinal} = {book.title}
          </li>
        ))}
      </ul>
      <Link href="/volumes/the-two-towers">Next Volume</Link>
      <Image src={picture} alt={book.title} width={140} height={230}></Image>
    </>
  );
}
