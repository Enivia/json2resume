export type TLevel = 1 | 2 | 3 | 4 | 5;

export type TBasicInfo = {
  name?: string;
  email?: string;
  phone?: string;
  picture?: string;
  github?: string;
};

export type TEducation = {
  school?: string;
  major?: string;
  degree?: string;
  start?: string;
  end?: string;
  desc?: string;
};

export type TExperience = {
  company?: string;
  job?: string;
  city?: string;
  start?: string;
  end?: string;
  desc?: string;
};

export type TProject = {
  project?: string;
  start?: string;
  end?: string;
  desc?: string;
};

export type TAward = {
  award?: string;
  issuer?: string;
  date?: string;
  desc?: string;
};

export type TSkill = {
  skill?: string;
  level?: TLevel;
};

export type TResumeSection = {
  educations?: TEducation[];
  experiences?: TExperience[];
  projects?: TProject[];
  awards?: TAward[];
  skills?: TSkill[];
};

export type TSelctionType = keyof TResumeSection;

export default interface Resume extends TResumeSection {
  sort: TSelctionType[];
  basicInfo: TBasicInfo;
}
