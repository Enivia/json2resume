import * as React from 'react';
import Json2Resume from '../../../dist';

const Demos = () => {
  return (
    <div style={{ height: 1200 }}>
      <Json2Resume
        resume={{
          sort: ['educations', 'experiences', 'projects', 'awards', 'skills'],
          basicInfo: {
            name: 'Enivia',
            email: 'aqingcc@outlook.com',
            phone: '123456',
            github: 'https://github.com/Enivia/',
          },
        }}
      />
    </div>
  );
};

export default Demos;
