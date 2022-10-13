import { ImageType, SanityBodyType } from '.';

interface PageInfo extends SanityBodyType {
  _type: 'pageInfo';
  name: string;
  role: string;
  heroImage: ImageType;
  bgInfo: string;
  profilePic: ImageType;
  phoneNumber: string;
  email: string;
  address: string;
}

export default PageInfo;
