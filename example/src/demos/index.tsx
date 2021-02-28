import * as React from 'react';
import Json2Resume from '../../../dist';

const Demos = () => {
  return (
    <div style={{ height: 1000 }}>
      <Json2Resume
        resume={{
          sort: ['educations', 'experiences', 'projects', 'awards', 'skills'],
          basicInfo: {},
        }}
      />
    </div>
  );
};

export default Demos;
