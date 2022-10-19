import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { SkillType } from '~/@types';
import { urlFor } from '~/lib/sanity';
import { skillsAnimation } from '~/animations/home';

interface ItemProps {
  skill: SkillType;
}

const Item: FC<ItemProps> = ({ skill: { title, image } }) => {
  return (
    <motion.div className='w-fit' variants={skillsAnimation}>
      <Image
        alt={title}
        height={90}
        objectFit='contain'
        src={urlFor(image).url()}
        width={90}
      />
    </motion.div>
  );
};

export default Item;
