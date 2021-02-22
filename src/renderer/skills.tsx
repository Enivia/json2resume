import React, { FC } from 'react';
import { TSkill } from '../interfaces';

interface Props {
  skills: TSkill[];
}

const Skills: FC<Props> = () => {
  return <div>skills renderer</div>;
};

export default Skills;
