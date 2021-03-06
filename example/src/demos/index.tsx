import * as React from 'react';
import Json2Resume from '../../../dist';
import Resume from '../../../dist/interfaces/resume';

const resume: Resume = {
  sort: ['educations', 'experiences', 'projects', 'awards', 'skills'],
  basicInfo: {
    name: 'Enivia',
    jobTitle: '前端开发工程师',
    email: 'aqingcc@outlook.com',
    phone: '123456',
    github: 'https://github.com/Enivia/',
  },
  educations: [
    {
      school: '某知名大学',
      major: '计算机科学与技术',
      degree: '本科',
      start: '2014-09-01',
      end: '2018-06-01',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
    {
      school: '某知名大学',
      major: '计算机科学与技术',
      degree: '本科',
      start: '2014-09-01',
      end: '2018-06-01',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
  ],
};

const Demos = () => {
  return (
    <div style={{ height: 1200 }}>
      <Json2Resume resume={resume} />
    </div>
  );
};

export default Demos;
