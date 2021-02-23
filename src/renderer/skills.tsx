import React, { FC } from 'react';
import { TSkill } from '../interfaces/resume';

interface Props {
  skills: TSkill[];
}

const Skills: FC<Props> = () => {
  return <div>skills renderer</div>;
};

export default Skills;
