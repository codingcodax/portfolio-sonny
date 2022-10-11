import { FC, ReactNode } from 'react';

import Link from '~/components/Link';

interface ItemProps {
  href: string;
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ href, children }) => {
  return (
    <Link
      className='py-2 px-6 text-gray-500 text-xs uppercase border border-[#242424] rounded-full tracking-widest transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40'
      href={href}
    >
      {children}
    </Link>
  );
};

export default Item;
