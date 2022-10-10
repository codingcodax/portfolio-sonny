import { FC } from 'react';

import type { IconType } from '~/@types/';

const Instagram: FC<IconType> = ({ className }) => {
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
      <rect height='16' rx='4' width='16' x='4' y='4' />
      <circle cx='12' cy='12' r='3' />
      <line x1='16.5' x2='16.5' y1='7.5' y2='7.501' />
    </svg>
  );
};

export default Instagram;
