import React, { FC } from 'react';
import styles from './index.module.less';

interface Props {
  title: string;
}

const Section: FC<Props> = props => {
  const { title } = props;

  return (
    <div>
      <div className={styles.title}>{title}</div>
      {props.children}
    </div>
  );
};

export default Section;
