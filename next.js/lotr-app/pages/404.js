import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>Error 404 :/</h1>
      <h2>This is not the Way to Mordor...</h2>
      <p>Go back</p>
      <Link href="/">Home</Link>
    </>
  );
}
