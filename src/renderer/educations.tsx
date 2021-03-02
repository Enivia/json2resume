import React, { FC } from 'react';
import Section from '../components/section';
import { TEducation } from '../interfaces/resume';

interface Props {
  educations: TEducation[];
}

const Educations: FC<Props> = () => {
  return <Section title="Education"> educations renderer</Section>;
};

export default Educations;
