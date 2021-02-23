import {
  TFooterConfig,
  TGlobalConfig,
  THeaderConfig,
  TSectionConfig,
  TTitleConfig,
} from '../interfaces/config';

export const defaultGlobalConfig: TGlobalConfig = {
  color: '#000000',
  fontSize: '16px',
  lineHeight: 'm',
  margin: 'm',
};

export const defaultHeaderConfig: THeaderConfig = {
  placement: 'center',
  picture: { size: 'm' },
};

export const defaultTitleConfig: TTitleConfig = {
  size: 'm',
  bold: true,
};

export const defaultSubtitleConfig: TTitleConfig = {
  size: 'm',
  italic: true,
};

export const defaultSectionConfig: TSectionConfig = {
  title: defaultTitleConfig,
  itemTitle: defaultTitleConfig,
  itemSubtitle: defaultSubtitleConfig,
};

export const defaultFooterConfig: TFooterConfig = {
  placement: 'center',
};
