import { FC } from 'react';
import { motion } from 'framer-motion';

import { SkillType } from '~/@types';
import { skillsAnimation } from '~/animations/home';

import Item from './Item';

interface SkillsProps {
  skills: SkillType[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <motion.section
      className='px-10 mx-auto h-screen max-w-7xl snap-start'
      id='skills'
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className='pt-20 mb-20 text-gray-500 text-center text-2xl uppercase tracking-[20px]'>
        Skills
      </h2>

      <motion.div
        className='mx-auto w-fit grid grid-cols-4 gap-6 justify-center'
        initial='hidden'
        variants={skillsAnimation}
        viewport={{ once: true }}
        whileInView='whileInView'
      >
        {skills.map((skill) => (
          <Item key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
