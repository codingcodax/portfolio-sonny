import Item from './Item';

const Links = () => {
  return (
    <div className='flex justify-center gap-x-2'>
      <Item href='#about'>About</Item>
      <Item href='#experience'>Experience</Item>
      <Item href='#skills'>Skills</Item>
      <Item href='#projects'>Projects</Item>
    </div>
  );
};

export default Links;
