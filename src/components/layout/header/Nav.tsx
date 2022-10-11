import { motion } from 'framer-motion';

import { comingRight } from '~/animations/header';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from '~/components/icons';

import Item from './Item';

const Nav = () => {
  return (
    <motion.nav animate='show' initial='hidden' variants={comingRight}>
      <ul className='flex gap-4'>
        <Item href='https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ'>
          <YoutubeIcon className='h-6 w-6 stroke-gray-400' />
        </Item>

        <Item href='https://www.instagram.com/codingcodax/'>
          <InstagramIcon className='h-6 w-6 stroke-gray-400' />
        </Item>

        <Item href='https://twitter.com/codingcodax'>
          <TwitterIcon className='h-6 w-6 stroke-gray-400' />
        </Item>
      </ul>
    </motion.nav>
  );
};

export default Nav;
