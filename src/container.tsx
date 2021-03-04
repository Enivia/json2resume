import { throttle } from 'lodash';
import React, { FC } from 'react';
import classNames from 'classnames';
import Header from './components/header';
import Content from './components/content';
import Resume from './interfaces/resume';
import renderer from './renderer';
import useResumeConfig from './hooks/use-resume-config';
import './index.less';

interface Props {
  resume: Resume;
}

const Container: FC<Props> = props => {
  const { resume } = props;
  const { sort, basicInfo, ...sections } = resume;

  const ref = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    const handleResize = throttle(() => {
      const container = ref.current;
      if (container) {
        const parentHeight = container.parentElement?.clientHeight || 600;
        const height = container.clientHeight;
        container.style.transform = `scale(${parentHeight / height})`;
      }
    }, 200);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { header } = useResumeConfig();

  return (
    <div className="json2resume-renderer-container" ref={ref}>
      <div
        className={classNames('json2resume-renderer', {
          'json2resume-renderer-horizontal': header.placement !== 'center',
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
    </div>
  );
};

export default Container;
