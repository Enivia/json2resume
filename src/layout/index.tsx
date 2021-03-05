import React, { FC } from 'react';
import classNames from 'classnames';
import Header from './header';
import Content from './content';
import useResumeConfig from '../hooks/use-resume-config';
import Resume from '../interfaces/resume';
import renderer from '../renderer';
import styles from './index.module.less';

const prefix = 'layout';

interface Props {
  resume: Resume;
}

const Layout: FC<Props> = props => {
  const { sort, basicInfo, ...sections } = props.resume;
  const { header } = useResumeConfig();

  return (
    <div
      className={classNames(styles[prefix], {
        [styles[`${prefix}-horizontal`]]: header.placement !== 'center',
      })}
    >
      <Header basicInfo={basicInfo} />
      <Content>
        {sort.map(key => {
          const Renderer = renderer[key];
          const rendererProps = { [key]: sections[key] };
          return <Renderer key={key} {...rendererProps} />;
        })}
      </Content>
    </div>
  );
};

export default Layout;
