import React, { FC, ReactNode } from 'react';

import styles from './index.module.less';

const prefix = 'section-content';

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  date?: ReactNode;
}

const SectionContent: FC<Props> = props => {
  const { title, subtitle, date } = props;

  return (
    <div className={styles[prefix]}>
      <div className={styles[`${prefix}-header`]}>
        <div className={styles[`${prefix}-title-wrapper`]}>
          <div className={styles[`${prefix}-title`]}>{title}</div>
          <div className={styles[`${prefix}-subtitle`]}>{subtitle}</div>
        </div>
        <div className={styles[`${prefix}-date`]}>{date}</div>
      </div>
      <div className={styles[`${prefix}-content`]}>{props.children}</div>
    </div>
  );
};

export default SectionContent;
