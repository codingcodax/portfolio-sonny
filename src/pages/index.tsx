import type { NextPage } from 'next';

import { Header } from '~/components/layout';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <p>Home Page</p>
    </div>
  );
};

export default Home;
