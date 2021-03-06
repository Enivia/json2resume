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
      start: '20140901',
      end: '20180601',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
    {
      school: '某知名大学',
      major: '计算机科学与技术',
      degree: '本科',
      start: '20140901',
      end: '20180601',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
  ],
  experiences: [
    {
      company: '非常著名的公司',
      job: '前端开发',
      city: '北京',
      start: '20140901',
      end: '20180601',
    },
    {
      company: '非常著名的公司',
      job: '前端开发',
      city: '北京',
      start: '20140901',
      end: '20180601',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
  ],
  projects: [
    {
      project: '一个项目名称',
      start: '20140901',
      end: '20180601',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
  ],
  awards: [
    {
      award: '一个非常重要的奖项',
      issuer: '一个很牛的机构',
      date: '20200304',
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
