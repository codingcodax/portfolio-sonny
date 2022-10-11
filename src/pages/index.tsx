import type { NextPage } from 'next';

import { Header } from '~/components/layout';
import { Hero } from '~/components/home';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
