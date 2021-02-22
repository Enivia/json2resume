import React, { FC } from 'react';
import { TExperience } from '../interfaces';

interface Props {
  experiences: TExperience[];
}

const Experiences: FC<Props> = () => {
  return <div>experience renderer</div>;
};

export default Experiences;
