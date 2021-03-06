import React, { FC } from 'react';
import Section from '../components/section';
import { TProject } from '../interfaces/resume';

interface Props {
  projects: TProject[];
}

const Projects: FC<Props> = props => {
  const { projects } = props;

  return (
    <Section title="项目经验">
      {projects.map(({ project, start, end, desc }, i) => (
        <Section.Content key={i} title={project} date={{ start, end }}>
          {desc}
        </Section.Content>
      ))}
    </Section>
  );
};

export default Projects;
