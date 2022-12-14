import type { GetStaticProps, NextPage } from 'next';

import { Header } from '~/components/layout';
import { Hero, About, Skills, Projects, Contact } from '~/components/home';
import { PageInfoType, ProjectType, SkillType, SocialType } from '~/@types';
import {
  getPageInfo,
  getProjects,
  getSkills,
  getSocials,
} from '~/utils/sanity';

interface Props {
  pageInfo: PageInfoType;
  skills: SkillType[];
  socials: SocialType[];
  projects: ProjectType[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await getPageInfo();
  const socials = await getSocials();
  const skills = await getSkills();
  const projects = await getProjects();

  return { props: { pageInfo, socials, skills, projects }, revalidate: 10 };
};

interface HomeProps {
  pageInfo: PageInfoType;
  skills: SkillType[];
  socials: SocialType[];
  projects: ProjectType[];
}

/* eslint-disable */
const Home: NextPage<HomeProps> = ({ pageInfo, skills, socials, projects }) => {
  return (
    <div className='h-screen text-white bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Header socials={socials} email={pageInfo.email} />
      <Hero pageInfo={pageInfo} />
      <About pageInfo={pageInfo} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact email={pageInfo.email} address={pageInfo.address} />
    </div>
  );
};

export default Home;
