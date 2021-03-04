import React, { FC } from 'react';
import styles from './index.module.less';

const Content: FC = props => {
  return <div className={styles.content}>{props.children}</div>;
};

export default Content;
