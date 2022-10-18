import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { aboutImageAnimation } from '~/animations/home';
import { PageInfoType } from '~/@types';
import { urlFor } from '~/lib/sanity';

interface AboutProps {
  pageInfo: PageInfoType;
}

const About: FC<AboutProps> = ({ pageInfo: { bgInfo, name, profilePic } }) => {
  return (
    <motion.section
      className='px-10 mx-auto h-screen max-w-7xl relative flex justify-evenly items-center flex-col md:flex-row text-center md:text-left snap-center'
      id='about'
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className='absolute top-24 text-gray-500 text-2xl uppercase tracking-[20px]'>
        About
      </h2>

      <motion.div
        className='-mb-20 md:mb-0 h-56 md:h-95 xl:h-[600px] w-56 md:w-64 xl:w-[500px] flex-shrink-0'
        initial='hidden'
        variants={aboutImageAnimation}
        viewport={{ once: true }}
        whileInView='whileInView'
      >
        <Image
          alt={name}
          className='rounded-full md:rounded-lg'
          height={500}
          objectFit='cover'
          src={urlFor(profilePic).url()}
          width={500}
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='mb-10 text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{' '}
          background
        </h4>

        <p className='mb-4'>{bgInfo}</p>
      </div>
    </motion.section>
  );
};

export default About;
