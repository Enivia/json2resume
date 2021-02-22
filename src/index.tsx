import * as React from 'react';
import { TResume } from './interfaces';
import renderer from './renderer';
import Basic from './renderer/basic';

interface Props {
  resume: TResume;
}

const Json2Resume: React.FC<Props> = React.memo(props => {
  const { sort, basicInfo, ...sections } = props.resume;

  return (
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
  );
});

export default Json2Resume;
