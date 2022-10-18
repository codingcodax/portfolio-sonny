import { ReactNode } from 'react';

import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '~/components/icons';

interface SocialIconsType {
  name: string;
  icon: ReactNode;
}

const socialIcons: SocialIconsType[] = [
  {
    name: 'youtube',
    icon: <YoutubeIcon className='h-6 w-6 stroke-gray-400' />,
  },
  {
    name: 'instagram',
    icon: <InstagramIcon className='h-6 w-6 stroke-gray-400' />,
  },
  {
    name: 'twitter',
    icon: <TwitterIcon className='h-6 w-6 stroke-gray-400' />,
  },
  {
    name: 'linkedin',
    icon: <LinkedinIcon className='h-6 w-6 stroke-gray-400' />,
  },
];

export default socialIcons;
