import * as React from 'react';
import ResumeConfigContext, { ConfigContextValue } from './resume-config-context';
import ResumeConfig from './interfaces/config';
import Resume from './interfaces/resume';
import { setGlobalVariable } from './utils';
import Container from './container';

interface Props {
  resume: Resume;
  config?: ResumeConfig;
}

const Json2Resume: React.FC<Props> = React.memo(props => {
  const { resume, config } = props;

  const configContextValue = React.useMemo<ConfigContextValue>(() => {
    const { global, header, section, footer } = config || {};
    // update css variables
    setGlobalVariable(global);
    const configValue: ResumeConfig = { global, header, section, footer };
    return { config: configValue };
  }, [config]);

  return (
    <ResumeConfigContext.Provider value={configContextValue}>
      <Container resume={resume} />
    </ResumeConfigContext.Provider>
  );
});

export default Json2Resume;
