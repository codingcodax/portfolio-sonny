import { Cursor, useTypewriter } from 'react-simple-typewriter';

import Circles from './Circles';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Alexis Guzman",
      'Guy-who-loves-coffe.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex items-center justify-center flex-col space-y-8 text-center snap-center overflow-hidden'>
      <Circles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  );
};

export default Hero;
