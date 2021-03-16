import Head from 'next/head';
import Button from '../shared/components/button';

const Home = () => {
  return (
    <section>
      <Head>
        <title>Next.js / Tailwind Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Button buttonText="Passed Button Text"></Button>
      </div>
    </section>
  );
};

export default Home;
