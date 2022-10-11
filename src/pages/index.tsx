import type { NextPage } from 'next';

import { Header } from '~/components/layout';
import { Hero } from '~/components/home';

const Home: NextPage = () => {
  return (
    <div className='h-screen text-white bg-[rgb(36,36,36)]'>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
