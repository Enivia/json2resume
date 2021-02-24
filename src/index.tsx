import * as React from 'react';
import ResumeConfigContext, { ConfigContextValue } from './resume-config-context';
import ResumeConfig from './interfaces/config';
import Resume from './interfaces/resume';
import renderer from './renderer';
import Basic from './renderer/basic';
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

  const configContextValue = React.useMemo<ConfigContextValue>(() => {
    const { global, header, section, footer } = config || {};
    const configValue: ResumeConfig = {
      global: { ...defaultGlobalConfig, ...global },
      header: { ...defaultHeaderConfig, ...header },
      section: { ...defaultSectionConfig, ...section },
      footer: { ...defaultFooterConfig, ...footer },
    };
    return { config: configValue };
  }, [config]);

  return (
    <ResumeConfigContext.Provider value={configContextValue}>
      <div className="json2resume-renderer-container">
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
