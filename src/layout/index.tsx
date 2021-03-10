import React, { forwardRef, useCallback, useRef } from 'react';
import classNames from 'classnames';
import Header from './header';
import Content from './content';
import useResumeConfig from '../hooks/use-resume-config';
import Resume from '../interfaces/resume';
import renderer from '../renderer';
import styles from './index.module.less';

const prefix = 'layout';

export interface LayoutInstance {
  getTotalPages: () => number;
}

interface Props {
  resume: Resume;
  page: number;
}

const Layout = forwardRef<LayoutInstance, Props>((props, ref) => {
  const { resume, page } = props;
  const { sort, basicInfo, ...sections } = resume;
  const { header } = useResumeConfig();

  const layoutRef = useRef<HTMLDivElement>(null);

  const getTotalPages = useCallback((): number => {
    const layout = layoutRef.current;
    if (!layout) return 0;
    const width = layout.clientWidth;
    const contentWidth = layout.scrollWidth;
    return Math.ceil(contentWidth / width);
  }, []);

  React.useImperativeHandle(ref, () => ({ getTotalPages }));

  return (
    <div
      ref={layoutRef}
      className={classNames(styles[prefix], {
        [styles[`${prefix}-horizontal`]]: header.placement !== 'center',
      })}
      style={{ left: `${-210 * (page - 1)}mm` }}
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
});

export default Layout;
