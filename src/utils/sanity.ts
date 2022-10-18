import { PageInfoType, ProjectType, SkillType, SocialType } from '~/@types';

const { NEXT_PUBLIC_BASE_URL } = process.env;

export const getPageInfo = async (): Promise<PageInfoType> => {
  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/pageInfo`);
  const { pageInfo } = await res.json();

  return pageInfo;
};

export const getSkills = async (): Promise<SkillType[]> => {
  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/skills`);
  const { skills } = await res.json();

  return skills;
};

export const getSocials = async (): Promise<SocialType[]> => {
  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/socials`);
  const { socials } = await res.json();

  return socials;
};

export const getProjects = async (): Promise<ProjectType[]> => {
  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/projects`);
  const { projects } = await res.json();

  return projects;
};
