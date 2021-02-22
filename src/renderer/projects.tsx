import React, { FC } from 'react';
import { TProject } from '../interfaces';

interface Props {
  projects: TProject[];
}

const Projects: FC<Props> = () => {
  return <div>project renderer</div>;
};

export default Projects;
