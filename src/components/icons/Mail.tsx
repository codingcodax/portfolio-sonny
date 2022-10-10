import { FC } from 'react';

import type { IconType } from '~/@types';

const Mail: FC<IconType> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      viewBox='0 0 24 24'
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <polyline points='3 7 12 13 21 7' />
    </svg>
  );
};

export default Mail;
