import { Link } from '~/components';
import { MailIcon } from '~/components/icons';

import Nav from './Nav';

const Header = () => {
  return (
    <header className='p-5 mx-auto max-w-7xl sticky flex justify-between'>
      <Nav />

      <Link className='flex items-center gap-2' href='/'>
        <MailIcon className='h-8 w-8 stroke-gray-400' />
        <span className='hidden uppercase text-sm text-gray-400 md:inline-block'>
          Get In Touch
        </span>
      </Link>
    </header>
  );
};

export default Header;
