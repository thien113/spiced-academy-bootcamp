import { volumes } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  const volumeSlug = router.query.volume;
  if (volumeSlug === undefined) {
    return null;
  }
  const book = volumes.find((volume) => volume.slug === volumeSlug);
  const bookArray = book.books;
  return (
    <>
      <h1>{book.title}</h1>
      <Link href="/">Home</Link>
      <Link href="/volumes">All Volumes</Link>
      <p>{book.description}</p>
      <ul>
        {bookArray.map((book) => (
          <li key={book.slug}>
            {book.ordinal} = {book.title}
          </li>
        ))}
      </ul>
      <Link href={`/volumes/${book.prev}`}>Prev Volume</Link>
      <Link href={`/volumes/${book.next}`}>Next Volume</Link>
      <Image src={book.cover} alt={book.title} width={140} height={230}></Image>
    </>
  );
}
