import {
  TFooterConfig,
  TGlobalConfig,
  THeaderConfig,
  TSectionConfig,
} from '../interfaces/config';

export const defaultGlobalConfig: TGlobalConfig = {
  primaryColor: '#000000',
  fontSize: '16px',
  lineHeight: 'm',
  padding: 'm',
};

export const defaultHeaderConfig: THeaderConfig = {
  placement: 'center',
  picture: { size: 'm', shape: 'square' },
};

export const defaultSectionConfig: TSectionConfig = {
  title: { size: 'm', bold: true },
};

export const defaultFooterConfig: TFooterConfig = {
  placement: 'center',
};
