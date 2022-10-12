import type { NextPage } from 'next';

import { Header } from '~/components/layout';
import { Hero, About, Experience } from '~/components/home';

const Home: NextPage = () => {
  return (
    <div className='h-screen text-white bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-scroll z-0'>
      <Header />
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
