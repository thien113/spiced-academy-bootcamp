import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement() {
    const volume = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${volume.slug}`);
  }
  return (
    <>
      <h2>Volumes</h2>
      <ul>
        {volumes.map(({ id, slug, title }) => (
          <li>
            <Link key={id} href={`/volumes/${slug}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={getRandomElement}>Random Book</button>
    </>
  );
}
