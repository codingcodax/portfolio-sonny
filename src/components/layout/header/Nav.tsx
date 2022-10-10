import { InstagramIcon, TwitterIcon, YoutubeIcon } from '~/components/icons';

import Item from './Item';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-4'>
        <Item href='https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ'>
          <YoutubeIcon className='h-8 w-8 stroke-gray-400' />
        </Item>

        <Item href='https://www.instagram.com/codingcodax/'>
          <InstagramIcon className='h-8 w-8 stroke-gray-400' />
        </Item>

        <Item href='https://twitter.com/codingcodax'>
          <TwitterIcon className='h-8 w-8 stroke-gray-400' />
        </Item>
      </ul>
    </nav>
  );
};

export default Nav;
