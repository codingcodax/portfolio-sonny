import { FC } from 'react';

import type { IconType } from '~/@types/';

const Youtube: FC<IconType> = ({ className }) => {
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
      <rect height='14' rx='4' width='18' x='3' y='5' />
      <path d='M10 9l5 3l-5 3z' />
    </svg>
  );
};

export default Youtube;
