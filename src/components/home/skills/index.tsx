import { FC } from 'react';

import { SkillType } from '~/@types';

import Item from './Item';

interface SkillsProps {
  skills: SkillType[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  console.log(skills);

  return (
    <section className='px-10 mx-auto h-screen max-w-7xl snap-start'>
      <h2 className='pt-20 mb-20 text-gray-500 text-center text-2xl uppercase tracking-[20px]'>
        Skills
      </h2>

      <div className='mx-auto w-fit grid grid-cols-4 gap-6 justify-center'>
        {skills.map((skill) => (
          <Item key={skill._id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
