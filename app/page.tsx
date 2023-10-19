import NextLink from "next/link";

export default function Home() {
  return (
    <main className="m-auto">
      <NextLink href="/login">Go to login</NextLink>
    </main>
  );
}
