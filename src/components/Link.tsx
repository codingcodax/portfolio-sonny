import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

interface LinkProps {
  isExternal?: true;
  className?: string;
  href: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({
  isExternal = false,
  className,
  href,
  children,
}) => {
  return (
    <NextLink href={href}>
      {isExternal ? (
        <a rel='noopener noreferrer' target='_blank' className={className}>
          {children}
        </a>
      ) : (
        <a className={className}>{children}</a>
      )}
    </NextLink>
  );
};

export default Link;
