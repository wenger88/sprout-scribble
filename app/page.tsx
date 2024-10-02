import Image from "next/image";

export default function Home() {
  // throw new Error('Not implemented');
  return (
      <main className="">
        <h1>Welcome to Next.js</h1>
          <Image src="https://nextjs.org/icons/globe.svg" alt={'Vercel Logo'} width={72} height={16} />
      </main>
  );
}
