import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

import { ProjectType } from '~/@types';
import { sanityClient } from '~/lib/sanity';

interface Data {
  projects: ProjectType[];
}

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

const projects = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
  const projects: ProjectType[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
};

export default projects;
