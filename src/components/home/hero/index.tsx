import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Alexis Guzman",
      'Guy-who-loves-coffe.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  );
};

export default Hero;
