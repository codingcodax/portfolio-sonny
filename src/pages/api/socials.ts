import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

import { SocialType } from '~/@types';
import { sanityClient } from '~/lib/sanity';

interface Data {
  socials: SocialType[];
}

const query = groq`
  *[_type == "social"]
`;

const socials = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
  const socials: SocialType[] = await sanityClient.fetch(query);

  res.status(200).json({ socials });
};

export default socials;
