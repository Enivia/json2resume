import React, { FC } from 'react';
import Section from '../components/section';
import { TExperience } from '../interfaces/resume';

interface Props {
  experiences: TExperience[];
}

const Experiences: FC<Props> = () => {
  return <Section title="Experience">experience renderer</Section>;
};

export default Experiences;
