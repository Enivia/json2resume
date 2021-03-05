import classNames from 'classnames';
import React, { FC } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import { TBasicInfo } from '../../interfaces/resume';
import styles from './index.module.less';

const prefix = 'header';

const infoItemSort: Array<keyof TBasicInfo> = ['email', 'phone', 'github'];

interface Props {
  basicInfo: TBasicInfo;
}

const Header: FC<Props> = props => {
  const { basicInfo } = props;
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
      <div className={pictureCls}>
        <div className={styles[`${prefix}-picture-content`]}></div>
      </div>
      <div className={styles[`${prefix}-info`]}>
        <div className={styles[`${prefix}-info-name`]}>{basicInfo.name}</div>
        <div className={styles[`${prefix}-info-items`]}>
          {infoItemSort.map(key => basicInfo[key] && <div>{basicInfo[key]}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Header;
