import Image from 'next/image';
import { motion } from 'framer-motion';

import { aboutImageAnimation } from '~/animations/home';

const About = () => {
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
          alt='Alexis'
          className='rounded-full md:rounded-lg'
          height={500}
          objectFit='cover'
          src='https://media-exp1.licdn.com/dms/image/C4E03AQEX_9Lp5RfjuQ/profile-displayphoto-shrink_800_800/0/1610992691122?e=1671062400&v=beta&t=wxtVwsIGZShz83FKzZ42Fbh4fFi-2WWVFbjO0xYKGrU'
          width={500}
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='mb-10 text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{' '}
          background
        </h4>

        <p className='mb-4'>
          I&apos;m Alexis Guzman, a self-taught developer exploring what&apos;s
          possible on the web, based in Mexico.
        </p>
        <p className='mb-4'>
          I like to spend my time building projects that interest me, as well as
          pushing myself to learn more through open source projects and share my
          knowledge with other developers.
        </p>

        <p>
          I&apos;ve been recently focused on building React (specifically
          Next.js) applications, using popular tools such as Chakra UI to help
          me bring my designs and Stitches for CSS-in-JS.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
