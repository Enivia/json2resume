import * as React from 'react';
import Json2Resume, { ResumeInstance } from '../../../dist';
import Resume from '../../../dist/interfaces/resume';

const resume: Resume = {
  sort: ['educations', 'experiences', 'projects', 'awards', 'skills'],
  basicInfo: {
    name: 'Enivia',
    jobTitle: '前端开发',
    picture: 'https://i.loli.net/2021/04/15/1BFIXVNxnM2mvAP.jpg',
    email: 'aqingcc@outlook.com',
    phone: '123456',
    github: 'https://github.com/Enivia/',
  },
  educations: [
    {
      school: '大学 A',
      major: '专业 A',
      degree: '本科',
      start: '20140901',
      end: '20180601',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
    {
      school: '大学 B',
      major: '专业 B',
      degree: '研究生',
      start: '20140901',
      end: '20180601',
      desc:
        '这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容这是一段描述内容',
    },
  ],
  experiences: [
    {
      company: '公司 A',
      job: 'XX开发',
      city: '北京',
      start: '20140901',
      end: '20180601',
    },
    {
      company: '公司 B',
      job: 'XX开发',
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
      award: '一个奖项',
      issuer: '一个机构',
      date: '20200304',
    },
    {
      award: '一个奖项',
      issuer: '一个机构',
      date: '20200304',
    },
  ],
  skills: [
    { skill: '技能1', level: 5 },
    { skill: '技能2', level: 4 },
    { skill: '技能3', level: 3 },
    { skill: '技能4', level: 2 },
    { skill: '技能5', level: 1 },
  ],
};

const Demos = () => {
  const ref = React.createRef<ResumeInstance>();

  return (
    <div style={{ backgroundColor: '#eee', padding: 20 }}>
      <button onClick={() => ref.current?.switchPage('backward')}>-</button>
      <button onClick={() => ref.current?.switchPage('forward')}>+</button>
      <div style={{ height: 1200 }}>
        <Json2Resume
          ref={ref}
          resume={resume}
          config={{ global: { primaryColor: '#006fca' } }}
        />
      </div>
    </div>
  );
};

export default Demos;
