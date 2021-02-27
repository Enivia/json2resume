import React, { FC } from 'react';

interface Props {
  title: string;
}

const Section: FC<Props> = props => {
  // const { title } = props;

  return <div>{props.children}</div>;
};

export default Section;
