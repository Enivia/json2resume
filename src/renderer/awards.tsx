import React, { FC } from 'react';
import Section from '../components/section';
import { TAward } from '../interfaces/resume';

interface Props {
  awards: TAward[];
}

const Awards: FC<Props> = () => {
  return <Section title="Awards">awards renderer</Section>;
};

export default Awards;
