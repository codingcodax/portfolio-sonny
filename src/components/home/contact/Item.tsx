import { FC, ReactNode } from 'react';

interface ItemProps {
  content: string;
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ content, children }) => {
  return (
    <div className='flex items-center space-x-4'>
      {children}
      <p>{content}</p>
    </div>
  );
};

export default Item;
