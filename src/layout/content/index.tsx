import classNames from 'classnames';
import React, { FC } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import styles from './index.module.less';

const prefix = 'content';

const Content: FC = props => {
  const { header } = useResumeConfig();

  const cls = classNames(styles[prefix], {
    [styles[`${prefix}-center`]]: header.placement === 'center',
  });
  return <div className={cls}>{props.children}</div>;
};

export default Content;
