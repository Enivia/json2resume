import * as React from 'react';
import Json2Resume from '../../../src';

const Demos = () => {
  return (
    <div style={{ height: 600 }}>
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
