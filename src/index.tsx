import * as React from 'react';
import { throttle } from 'lodash';
import ResumeConfigContext, { ConfigContextValue } from './resume-config-context';
import ResumeConfig from './interfaces/config';
import Resume from './interfaces/resume';
import { setGlobalVariable } from './utils';
import Layout from './layout';

import './index.less';

interface Props {
  resume: Resume;
  config?: ResumeConfig;
}

const Json2Resume: React.FC<Props> = React.memo(props => {
  const { resume, config } = props;

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
        <Layout resume={resume} />
      </div>
    </ResumeConfigContext.Provider>
  );
});

export default Json2Resume;
