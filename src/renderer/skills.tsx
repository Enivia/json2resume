import React, { FC } from 'react';
import Section from '../components/section';
import { TSkill } from '../interfaces/resume';

interface Props {
  skills: TSkill[];
}

const Skills: FC<Props> = () => {
  return <Section title="Skills">skills renderer</Section>;
};

export default Skills;
