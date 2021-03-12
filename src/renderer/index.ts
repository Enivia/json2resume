import { ComponentType } from 'react';
import { TSectionType } from '../interfaces/resume';
import Awards from './awards';
import Educations from './educations';
import Experiences from './experiences';
import Projects from './projects';
import Skills from './skills';

const renderer: Record<TSectionType, ComponentType<any>> = {
  educations: Educations,
  experiences: Experiences,
  projects: Projects,
  awards: Awards,
  skills: Skills,
};

export default renderer;
