import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

interface LinkProps {
  isExternal: true;
  className: string;
  href: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ isExternal, className, href, children }) => {
  return (
    <NextLink href={href} className={className}>
      {isExternal ? (
        <a rel='noopener noreferrer' target='_blank'>
          {children}
        </a>
      ) : (
        <a>{children}</a>
      )}
    </NextLink>
  );
};

export default Link;
