import Link from "next/link";
import { volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h2>Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
