import classNames from 'classnames';
import React, { FC, memo } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import styles from './index.module.less';

interface Props {
  title: string;
}

const Section: FC<Props> = memo(props => {
  const { title } = props;
  const { section } = useResumeConfig();

  const cls = classNames(styles['section-title'], {
    [styles[`section-title-${section.title?.size}`]]: true,
    [styles['section-title-bold']]: section.title?.bold,
    [styles['section-title-italic']]: section.title?.italic,
  });

  return (
    <div className={styles.section}>
      <div className={cls}>{title}</div>
      {props.children}
    </div>
  );
});

export default Section;
