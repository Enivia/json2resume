import * as React from 'react';
import ResumeConfigContext, { ResumeConfigContextValue } from './config-context';
import Config from './interfaces/config';
import Resume from './interfaces/resume';
import renderer from './renderer';
import Basic from './renderer/basic';

interface Props {
  resume: Resume;
  config?: Config;
}

const Json2Resume: React.FC<Props> = React.memo(props => {
  const { resume, config } = props;
  const { sort, basicInfo, ...sections } = resume;

  const configContextValue = React.useMemo<ResumeConfigContextValue>(
    () => ({ config }),
    [config]
  );

  return (
    <ResumeConfigContext.Provider value={configContextValue}>
      <div>
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
