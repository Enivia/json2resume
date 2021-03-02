export type TSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TPlacement = 'left' | 'right' | 'center';

export type TGlobalConfig = {
  primaryColor?: string;
  fontSize?: string;
  lineHeight?: TSize;
  padding?: TSize;
};

export type THeaderConfig = {
  placement?: TPlacement;
  picture?: {
    size?: TSize;
    square?: boolean;
  };
};

export type TTextConfig = {
  size?: TSize;
  bold?: boolean;
  italic?: boolean;
};

export type TSectionTitleConfig = TTextConfig & {};

export type TSectionConfig = {
  title?: TSectionTitleConfig;
};

export type TFooterContent = 'page' | 'name';

export type TFooterConfig = {
  show?: boolean;
  placement?: TPlacement;
  content?: TFooterContent[];
};

export default interface ResumeConfig {
  global?: TGlobalConfig;
  header?: THeaderConfig;
  section?: TSectionConfig;
  footer?: TFooterConfig;
}
