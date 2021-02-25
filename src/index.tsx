import * as React from 'react';
import { merge } from 'lodash';
import ResumeConfigContext, { ConfigContextValue } from './resume-config-context';
import ResumeConfig from './interfaces/config';
import Resume from './interfaces/resume';
import renderer from './renderer';
import Basic from './renderer/basic';
import useWindowResize from './hooks/use-window-resize';
import {
  defaultFooterConfig,
  defaultGlobalConfig,
  defaultHeaderConfig,
  defaultSectionConfig,
} from './constants';

import './index.css';

interface Props {
  resume: Resume;
  config?: ResumeConfig;
}

const Json2Resume: React.FC<Props> = React.memo(props => {
  const { resume, config } = props;
  const { sort, basicInfo, ...sections } = resume;

  const ref = React.createRef<HTMLDivElement>();
  useWindowResize(() => {
    const container = ref.current;
    if (container) {
      const height = container.clientHeight;
      container.style.transform = `scale(${600 / height})`;
      // container.style.width = height / Math.sqrt(2) + 'px';
    }
  });

  const configContextValue = React.useMemo<ConfigContextValue>(() => {
    const { global, header, section, footer } = config || {};
    const configValue: ResumeConfig = {
      global: merge({}, defaultGlobalConfig, global),
      header: merge({}, defaultHeaderConfig, header),
      section: merge({}, defaultSectionConfig, section),
      footer: merge({}, defaultFooterConfig, footer),
    };
    return { config: configValue };
  }, [config]);

  return (
    <ResumeConfigContext.Provider value={configContextValue}>
      <div className="json2resume-renderer-container" ref={ref}>
        <Basic info={basicInfo} />
        <div>
          {sort.map(key => {
            const Renderer = renderer[key];
            const rendererProps = { [key]: sections[key] };
            return <Renderer key={key} {...rendererProps} />;
          })}
        </div>
      </div>
    </ResumeConfigContext.Provider>
  );
});

export default Json2Resume;
