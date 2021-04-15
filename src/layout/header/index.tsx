import classNames from 'classnames';
import React, { FC } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import { TBasicInfo } from '../../interfaces/resume';
import styles from './index.module.less';

const prefix = 'header';

const infoItemSort: ['email', 'phone', 'github'] = ['email', 'phone', 'github'];

interface Props {
  basicInfo: TBasicInfo;
}

const Header: FC<Props> = props => {
  const { name, jobTitle, picture, ...rest } = props.basicInfo;
  const { header } = useResumeConfig();

  const headerCls = classNames(styles[prefix], {
    [styles[`${prefix}-${header.placement}`]]: true,
  });
  const pictureCls = classNames(styles[`${prefix}-picture`], {
    [styles[`${prefix}-picture-${header.picture?.size}`]]: true,
    [styles[`${prefix}-picture-${header.picture?.shape}`]]: true,
  });

  return (
    <div className={headerCls}>
      {picture && (
        <div className={pictureCls} style={{ backgroundImage: `url("${picture}")` }}>
          <div className={styles[`${prefix}-picture-content`]}></div>
        </div>
      )}
      <div className={styles[`${prefix}-info`]}>
        {name && <div className={styles[`${prefix}-info-name`]}>{name}</div>}
        {jobTitle && <div className={styles[`${prefix}-info-job`]}>{jobTitle}</div>}
        <div className={styles[`${prefix}-info-items`]}>
          {infoItemSort.map(key => rest[key] && <div key={key}>{rest[key]}</div>)}
        </div>
      </div>
      <div className={styles[`${prefix}-bg`]}></div>
    </div>
  );
};

export default Header;
