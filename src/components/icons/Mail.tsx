import { FC } from 'react';

import type { IconType } from '~/@types';

const Mail: FC<IconType> = ({ className }) => {
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
      <rect height='14' rx='2' width='18' x='3' y='5' />
      <polyline points='3 7 12 13 21 7' />
    </svg>
  );
};

export default Mail;
