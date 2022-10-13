import { ImageType, SanityBodyType, SkillType } from '.';

interface Project extends SanityBodyType {
  _type: 'project';
  title: string;
  image: ImageType;
  summary: string;
  technologies: SkillType[];
  linkToBuild: 'string';
}

export default Project;
