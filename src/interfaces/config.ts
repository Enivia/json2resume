export type TSize = 's' | 'm' | 'l';
export type TPlacement = 'left' | 'right' | 'center';
export type TDateConnector = '-' | '~' | '至';
export type TDateFormatter = 'yyyy-MM-dd' | 'yyyy/MM/dd' | 'yyyy年MM月dd日';

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
    shape?: 'circle' | 'square' | 'rectangle';
  };
};

export type TTextConfig = {
  size?: TSize;
  // bold?: boolean;
  // italic?: boolean;
};

export type TSectionTitleConfig = TTextConfig & {};

export type TSectionConfig = {
  title?: TSectionTitleConfig;
  date?: {
    connector?: TDateConnector;
    formatter?: TDateFormatter;
  };
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
