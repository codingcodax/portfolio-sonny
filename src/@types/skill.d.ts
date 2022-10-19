import { SanityBodyType, ImageType } from '.';

interface Skill extends SanityBodyType {
  _type: 'skill';
  title: string;
  image: ImageType;
}

export default Skill;
