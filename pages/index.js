import Link from 'next/link';

const Index = () => (
  <section>
    <h1>Hello World from Next.js</h1>
    <Link href="/about">
      <a title="About NextJS">About Next JS Projects</a>
    </Link>
  </section>
);

export default Index;