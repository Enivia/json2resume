import classNames from 'classnames';
import React, { FC } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import { TLevel } from '../../interfaces/resume';

import styles from './index.module.less';

interface ProgressProps {
  level?: TLevel;
}

const Bar: FC<ProgressProps> = props => {
  const cls = classNames(styles['bar-value'], {
    [styles[`bar-value-${props.level}`]]: true,
  });

  return (
    <div className={styles.bar}>
      <div className={cls}></div>
    </div>
  );
};

const Circle: FC<ProgressProps> = () => {
  return <div></div>;
};

const prefix = 'level';

interface Props {
  levels: { title?: string; level?: TLevel }[];
}

const Level: FC<Props> = props => {
  const { levels } = props;
  const { section } = useResumeConfig();

  const renderProgress = (level?: TLevel) => {
    switch (section.level?.type) {
      case 'circel':
        return <Circle level={level} />;
      case 'bar':
      default:
        return <Bar level={level} />;
    }
  };

  return (
    <div className={styles[prefix]}>
      {levels.map(({ title, level }, i) => (
        <div className={styles[`${prefix}-item`]} key={i}>
          <div className={styles[`${prefix}-title`]}>{title}</div>
          <div className={styles[`${prefix}-progress`]}>{renderProgress(level)}</div>
        </div>
      ))}
    </div>
  );
};

export default Level;
