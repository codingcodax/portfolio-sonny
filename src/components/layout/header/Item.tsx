import { FC, ReactNode } from 'react';

import { Link } from '~/components';

interface ItemProps {
  href: string;
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link isExternal href={href}>
        {children}
      </Link>
    </li>
  );
};

export default Item;
