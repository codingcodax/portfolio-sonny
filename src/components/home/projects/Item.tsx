import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ProjectType } from '~/@types';
import { urlFor } from '~/lib/sanity';
import { projectImageAnimation } from '~/animations/home';

interface ItemProps {
  project: ProjectType;
  id: number;
  length: number;
}

const Item: FC<ItemProps> = ({
  project: { image, title, technologies, summary },
  id,
  length,
}) => {
  return (
    <motion.div
      className='w-screen flex-shrink-0 flex flex-col items-center justify-center snap-center'
      id='projects'
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div
        className='px-2 md:p-0 mt-16 mb-6 h-fit'
        initial='hidden'
        variants={projectImageAnimation}
        viewport={{ once: true }}
        whileInView='whileInView'
      >
        <Image
          alt={title}
          className='rounded-lg'
          height={394}
          src={urlFor(image).url()}
          width={701}
        />
      </motion.div>

      <div className='mb-4 flex space-x-2'>
        {technologies.map(({ _id, title, image }) => {
          return (
            <div key={_id}>
              <Image
                alt={title}
                height={30}
                objectFit='contain'
                src={urlFor(image).url()}
                width={30}
              />
            </div>
          );
        })}
      </div>

      <div className='max-w-6xl'>
        <h4 className='mb-2 text-4xl text-center font-bold'>
          <span className='underline decoration-[#f7ab0a]/50'>
            Case Study {id + 1} of {length}:{' '}
          </span>
          {title}
        </h4>

        <p className='text-lg text-center md:text-left'>{summary}</p>
      </div>
    </motion.div>
  );
};

export default Item;
