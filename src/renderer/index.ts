import { ComponentType } from 'react';
import { TSelctionType } from '../interfaces';
import Awards from './awards';
import Educations from './educations';
import Experiences from './experiences';
import Projects from './projects';
import Skills from './skills';

const renderer: Record<TSelctionType, ComponentType<any>> = {
  educations: Educations,
  experiences: Experiences,
  projects: Projects,
  awards: Awards,
  skills: Skills,
};

export default renderer;
