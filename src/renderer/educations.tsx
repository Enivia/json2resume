import React, { FC } from 'react';
import Section from '../components/section';
import { TEducation } from '../interfaces/resume';

interface Props {
  educations: TEducation[];
}

const Educations: FC<Props> = props => {
  const { educations } = props;

  return (
    <Section title="教育信息">
      {educations.map(({ degree, school, major, start, end, desc }, i) => (
        <Section.Content
          key={i}
          title={`${degree}${school && `,${school}`}`}
          subtitle={major}
          date={{ start, end }}
        >
          {desc}
        </Section.Content>
      ))}
    </Section>
  );
};

export default Educations;
