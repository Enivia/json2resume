import React, { FC } from 'react';
import Section from '../components/section';
import { TExperience } from '../interfaces/resume';

interface Props {
  experiences: TExperience[];
}

const Experiences: FC<Props> = props => {
  const { experiences } = props;

  return (
    <Section title="工作经历">
      {experiences.map(({ company, job, city, start, end, desc }, i) => (
        <Section.Item
          key={i}
          title={`${company}${job && `,${job}`}`}
          subtitle={city}
          date={{ start, end }}
        >
          {desc}
        </Section.Item>
      ))}
    </Section>
  );
};

export default Experiences;
