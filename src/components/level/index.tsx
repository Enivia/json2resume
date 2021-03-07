import classNames from 'classnames';
import React, { FC } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import { TLevel } from '../../interfaces/resume';

import styles from './index.module.less';

const prefix = 'level';

interface ProgressProps {
  level?: TLevel;
}

const Bar: FC<ProgressProps> = props => {
  const barPrefix = `${prefix}-bar`;

  const cls = classNames(styles[`${barPrefix}-value`], {
    [styles[`${barPrefix}-value-${props.level}`]]: true,
  });

  return (
    <div className={styles[barPrefix]}>
      <div className={cls}></div>
    </div>
  );
};

const Circle: FC<ProgressProps> = props => {
  const circlePrefix = `${prefix}-circle`;

  const getCls = (num: number) => {
    return classNames(styles[`${circlePrefix}-item`], {
      [styles[`${circlePrefix}-item-selected`]]: num <= (props.level || 0),
    });
  };

  return (
    <div className={styles[circlePrefix]}>
      <div className={getCls(1)}></div>
      <div className={getCls(2)}></div>
      <div className={getCls(3)}></div>
      <div className={getCls(4)}></div>
      <div className={getCls(5)}></div>
    </div>
  );
};

interface Props {
  levels: { title?: string; level?: TLevel }[];
}

const Level: FC<Props> = props => {
  const { levels } = props;
  const { section } = useResumeConfig();

  const renderProgress = (level?: TLevel) => {
    switch (section.level?.type) {
      case 'circle':
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
