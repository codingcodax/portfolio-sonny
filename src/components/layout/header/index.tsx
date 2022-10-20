import { FC } from 'react';
import { motion } from 'framer-motion';

import { PageInfoType, SocialType } from '~/@types';
import { comingLeft } from '~/animations/header';
import { Link } from '~/components';
import { MailIcon } from '~/components/icons';

import Nav from './Nav';

interface HeaderProps {
  socials: SocialType[];
  email: PageInfoType['email'];
}

const Header: FC<HeaderProps> = ({ socials, email }) => {
  return (
    <header className='p-5 mx-auto max-w-7xl sticky top-0 flex justify-between z-20'>
      <Nav socials={socials} />

      <motion.div animate='show' initial='hidden' variants={comingLeft}>
        <Link className='flex items-center gap-2' href={`mailto:${email}`}>
          <MailIcon className='h-6 w-6 stroke-gray-400' />
          <span className='hidden uppercase text-sm text-gray-400 md:inline-block'>
            Get In Touch
          </span>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
