import { FC } from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import type { PageInfoType } from '~/@types/';
import { urlFor } from '~/lib/sanity';

import Circles from './Circles';
import Links from './links';

interface HeroProps {
  pageInfo: PageInfoType;
}

const Hero: FC<HeroProps> = ({ pageInfo: { name, role, heroImage } }) => {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${name}`,
      'Guy-who-loves-coffe.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <main className='h-screen flex items-center justify-center flex-col space-y-8 text-center snap-start overflow-hidden'>
      <Circles />

      <div>
        <Image
          alt={name}
          className='rounded-full'
          height={128}
          objectFit='cover'
          src={urlFor(heroImage).url()}
          width={128}
        />
      </div>

      <div className='z-10'>
        <h2 className='mb-2 text-gray-500 text-sm uppercase tracking-[15px]'>
          {role}
        </h2>
        <h1 className='mb-5 text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <Links />
      </div>
    </main>
  );
};

export default Hero;
