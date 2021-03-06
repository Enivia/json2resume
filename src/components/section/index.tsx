import classNames from 'classnames';
import React, { FC } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import SectionItem from './Item';
import styles from './index.module.less';

const prefix = 'section';

interface Props {
  title: string;
}

interface ISection extends FC<Props> {
  Item: typeof SectionItem;
}

const Section: ISection = (props => {
  const { title } = props;
  const { section } = useResumeConfig();

  const cls = classNames(styles[`${prefix}-title`], {
    [styles[`${prefix}-title-${section.title?.size}`]]: true,
    // [styles[`${prefix}-title-bold`]]: section.title?.bold,
    // [styles[`${prefix}-title-italic`]]: section.title?.italic,
  });

  return (
    <div className={styles.section}>
      <div className={cls}>{title}</div>
      <div className={styles[`${prefix}-content`]}>{props.children}</div>
    </div>
  );
}) as ISection;

Section.Item = SectionItem;

export default Section;
