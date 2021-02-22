import React, { FC } from 'react';
import { TBasicInfo } from '../interfaces';

interface Props {
  info: TBasicInfo;
}

const Basic: FC<Props> = () => {
  return <div>basic info renderer</div>;
};

export default Basic;
