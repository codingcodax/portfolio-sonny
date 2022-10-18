import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

import { PageInfoType } from '~/@types';
import { sanityClient } from '~/lib/sanity';

interface Data {
  pageInfo: PageInfoType[];
}

const query = groq`
  *[_type == "pageInfo"][0]
`;

const pageInfo = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
  const pageInfo: PageInfoType[] = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
};

export default pageInfo;
