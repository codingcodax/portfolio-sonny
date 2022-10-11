import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import Circles from './Circles';
import Links from './links';

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

      <div>
        <Image
          alt='Alexis'
          className='rounded-full'
          height={128}
          objectFit='cover'
          src='https://media-exp1.licdn.com/dms/image/C4E03AQEX_9Lp5RfjuQ/profile-displayphoto-shrink_800_800/0/1610992691122?e=1671062400&v=beta&t=wxtVwsIGZShz83FKzZ42Fbh4fFi-2WWVFbjO0xYKGrU'
          width={128}
        />
      </div>

      <div className='z-20'>
        <h2 className='mb-2 text-gray-500 text-sm uppercase tracking-[15px]'>
          Frontend Developer
        </h2>
        <h1 className='mb-5 text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <Links />
      </div>
    </div>
  );
};

export default Hero;
