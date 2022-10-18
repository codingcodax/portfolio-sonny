import { FC } from 'react';

import type { IconType } from '~/@types';

const Linkedin: FC<IconType> = ({ className }) => {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h24v24H0z' fill='none' stroke='none' />
      <rect height='16' rx='2' width='16' x='4' y='4' />
      <line x1='8' x2='8' y1='11' y2='16' />
      <line x1='8' x2='8' y1='8' y2='8.01' />
      <line x1='12' x2='12' y1='16' y2='11' />
      <path d='M16 16v-3a2 2 0 0 0 -4 0' />
    </svg>
  );
};

export default Linkedin;
