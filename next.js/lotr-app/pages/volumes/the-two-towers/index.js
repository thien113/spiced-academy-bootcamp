import { volumes } from "../../../lib/data";
import Image from "next/image";
import picture from "../../../public/images/the-two-towers.png";
import Link from "next/link";

export default function theTwoTowers() {
  const book = volumes.find(({ slug }) => slug === "the-two-towers");
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
      <Image src={picture} alt={book.title} width={140} height={230}></Image>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </>
  );
}
