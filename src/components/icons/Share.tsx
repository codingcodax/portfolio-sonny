import { FC } from 'react';

import type { IconType } from '~/@types/';

const Share: FC<IconType> = ({ className }) => {
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
      <circle cx='6' cy='12' r='3' />
      <circle cx='18' cy='6' r='3' />
      <circle cx='18' cy='18' r='3' />
      <line x1='8.7' x2='15.3' y1='10.7' y2='7.3' />
      <line x1='8.7' x2='15.3' y1='13.3' y2='16.7' />
    </svg>
  );
};

export default Share;
