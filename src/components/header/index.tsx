import classNames from 'classnames';
import React, { FC } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import { TBasicInfo } from '../../interfaces/resume';

import styles from './index.module.less';

const prefix = 'header';

interface Props {
  basicInfo: TBasicInfo;
}

const Header: FC<Props> = () => {
  const { header } = useResumeConfig();

  const cls = classNames(styles[prefix], {
    [styles[`${prefix}-${header.placement}`]]: true,
  });

  return <div className={cls}>header</div>;
};

export default Header;
