import React, { FC } from 'react';
import { TProject } from '../interfaces/resume';

interface Props {
  projects: TProject[];
}

const Projects: FC<Props> = () => {
  return <div>project renderer</div>;
};

export default Projects;
