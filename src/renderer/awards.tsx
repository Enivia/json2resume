import React, { FC } from 'react';
import { TAward } from '../interfaces/resume';

interface Props {
  awards: TAward[];
}

const Awards: FC<Props> = () => {
  return <div>awards renderer</div>;
};

export default Awards;