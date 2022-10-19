import Image from 'next/image';
import { FC } from 'react';

import { SkillType } from '~/@types';
import { urlFor } from '~/lib/sanity';

interface ItemProps {
  skill: SkillType;
}

const Item: FC<ItemProps> = ({ skill: { title, image } }) => {
  return (
    <div className='w-fit'>
      <Image
        alt={title}
        height={90}
        objectFit='contain'
        src={urlFor(image).url()}
        width={90}
      />
    </div>
  );
};

export default Item;
