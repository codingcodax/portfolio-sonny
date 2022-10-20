import { FC } from 'react';

import { PageInfoType } from '~/@types';
import { MailIcon, MapIcon } from '~/components/icons';
import Form from './Form';

import Item from './Item';

interface ContactProps {
  email: PageInfoType['email'];
  address: PageInfoType['address'];
}

const Contact: FC<ContactProps> = ({ email, address }) => {
  return (
    <div className='px-10 mx-auto h-screen max-w-7xl snap-start' id='contact'>
      <h2 className='pt-20 mb-20 text-gray-500 text-center text-2xl uppercase tracking-[20px]'>
        Contact
      </h2>

      <h4 className='text-4xl text-center'>
        I have got just what you need.{' '}
        <span className='block underline decoration-[#f7ab0a]/50'>
          Let&apos;s talk.
        </span>
      </h4>

      <div className='mt-10 mb-5 flex flex-col items-center justify-center space-y-4'>
        <Item content={email}>
          <MailIcon className='h-6 w-6 stroke-[#f7ab0a]' />
        </Item>

        <Item content={address}>
          <MapIcon className='h-6 w-6 stroke-[#f7ab0a]' />
        </Item>
      </div>

      <Form />
    </div>
  );
};

export default Contact;
