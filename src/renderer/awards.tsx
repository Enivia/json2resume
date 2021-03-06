import React, { FC } from 'react';
import Section from '../components/section';
import { TAward } from '../interfaces/resume';

interface Props {
  awards: TAward[];
}

const Awards: FC<Props> = props => {
  const { awards } = props;

  return (
    <Section title="奖项/荣誉">
      {awards.map(({ award, issuer, date, desc }, i) => (
        <Section.Item key={i} title={award} subtitle={issuer} date={date}>
          {desc}
        </Section.Item>
      ))}
    </Section>
  );
};

export default Awards;
