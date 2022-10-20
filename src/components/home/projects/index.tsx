import { FC } from 'react';

import { ProjectType } from '~/@types';

import Item from './Item';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className='h-screen snap-start relative' id='projects'>
      <h2 className='pt-20 mb-20 text-gray-500 text-center text-2xl uppercase tracking-[20px]'>
        Projects
      </h2>

      <div className='h-[500px] w-full absolute top-[30%] left-0 bg-[#f7ab0a]/10 -skew-y-12' />

      <div className='w-rull relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, id) => {
          return (
            <Item
              key={project._id}
              id={id}
              length={projects.length}
              project={project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
