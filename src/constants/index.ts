import {
  TFooterConfig,
  TGlobalConfig,
  THeaderConfig,
  TSectionConfig,
  TSize,
} from '../interfaces/config';

export const defaultGlobalConfig: TGlobalConfig = {
  primaryColor: '#000000',
  fontSize: '16px',
  lineHeight: 'm',
  padding: 'm',
};

export const defaultHeaderConfig: THeaderConfig = {
  placement: 'center',
  picture: { size: 'm' },
};

export const defaultSectionConfig: TSectionConfig = {
  title: { size: 'm', bold: true },
};

export const defaultFooterConfig: TFooterConfig = {
  placement: 'center',
};

export const pictureSizeValues: Record<TSize, string> = {
  xs: '12px',
  s: '24px',
  m: '36px',
  l: '48px',
  xl: '60px',
};

export const sectionTitleSizeValues: Record<TSize, string> = {
  xs: '1em',
  s: '1.2em',
  m: '1.5em',
  l: '1.75em',
  xl: '2em',
};

export const titleSizeValues: Record<TSize, string> = {
  xs: '1em',
  s: '1.2em',
  m: '1.4em',
  l: '1.6em',
  xl: '1.75em',
};
