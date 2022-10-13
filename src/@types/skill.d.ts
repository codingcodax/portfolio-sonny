import { SanityBodyType } from '.';

interface Skill extends SanityBodyType {
  _type: 'skill';
  title: string;
}

export default Skill;
