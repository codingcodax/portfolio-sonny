import { SanityBodyType } from '.';

interface Social extends SanityBodyType {
  _type: 'social';
  title: string;
  url: string;
}

export default Social;
