import * as React from 'react';
import Json2Resume from '../../../src';

const Demos = () => {
  return (
    <Json2Resume
      resume={{
        sort: ['educations', 'experiences', 'projects', 'awards', 'skills'],
        basicInfo: {},
      }}
    />
  );
};

export default Demos;
