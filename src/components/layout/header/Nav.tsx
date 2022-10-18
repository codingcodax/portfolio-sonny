import { motion } from 'framer-motion';
import { FC } from 'react';

import { SocialType } from '~/@types';
import { comingRight } from '~/animations/header';
import socialIcons from '~/data/socialIcons';

import Item from './Item';

interface NavProps {
  socials: SocialType[];
}

const Nav: FC<NavProps> = ({ socials }) => {
  const navItems = socials.map((social) => ({
    ...social,
    // @ts-ignore
    icon: socialIcons.find((socialIcon) => socialIcon.name === social.title)
      .icon,
  }));

  return (
    <motion.nav animate='show' initial='hidden' variants={comingRight}>
      <ul className='flex gap-4'>
        {navItems.map((navItem) => (
          <Item key={navItem._id} href={navItem.url}>
            {navItem.icon}
          </Item>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
