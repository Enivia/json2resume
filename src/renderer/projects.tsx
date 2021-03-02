import React, { FC } from 'react';
import Section from '../components/section';
import { TProject } from '../interfaces/resume';

interface Props {
  projects: TProject[];
}

const Projects: FC<Props> = () => {
  return <Section title="Project">project renderer</Section>;
};

export default Projects;
