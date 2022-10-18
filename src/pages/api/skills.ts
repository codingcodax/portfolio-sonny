import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

import { SkillType } from '~/@types';
import { sanityClient } from '~/lib/sanity';

interface Data {
  skills: SkillType[];
}

const query = groq`
  *[_type == "skill"]
`;

const skills = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
  const skills: SkillType[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
};

export default skills;
