import React, { FC } from 'react';
import Level from '../components/level';
import Section from '../components/section';
import { TSkill } from '../interfaces/resume';

interface Props {
  skills: TSkill[];
}

const Skills: FC<Props> = props => {
  const { skills } = props;

  return (
    <Section title="技能">
      <Level levels={skills.map(({ skill, level }) => ({ title: skill, level }))} />
    </Section>
  );
};

export default Skills;
