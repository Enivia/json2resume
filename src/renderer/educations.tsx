import React, { FC } from 'react';
import { TEducation } from '../interfaces';

interface Props {
  educations: TEducation[];
}

const Educations: FC<Props> = () => {
  return <div>educations renderer</div>;
};

export default Educations;
