import * as React from 'react';
import { throttle } from 'lodash';
import ResumeConfigContext, { ConfigContextValue } from './resume-config-context';
import ResumeConfig from './interfaces/config';
import Resume from './interfaces/resume';
import renderer from './renderer';
import Basic from './renderer/basic';
import { setGlobalVariable } from './utils';

import './index.less';

interface Props {
  resume: Resume;
  config?: ResumeConfig;
}

const Json2Resume: React.FC<Props> = React.memo(props => {
  const { resume, config } = props;
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

  const configContextValue = React.useMemo<ConfigContextValue>(() => {
    const { global, header, section, footer } = config || {};
    // update css variables
    setGlobalVariable(global);
    const configValue: ResumeConfig = { global, header, section, footer };
    return { config: configValue };
  }, [config]);

  return (
    <ResumeConfigContext.Provider value={configContextValue}>
      <div className="json2resume-renderer-container" ref={ref}>
        <div className="json2resume-renderer">
          <Basic info={basicInfo} />
          <div>
            {sort.map(key => {
              const Renderer = renderer[key];
              const rendererProps = { [key]: sections[key] };
              return <Renderer key={key} {...rendererProps} />;
            })}
          </div>
        </div>
      </div>
    </ResumeConfigContext.Provider>
  );
});

export default Json2Resume;
