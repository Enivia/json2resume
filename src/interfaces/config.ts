export type TSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TPlacement = 'left' | 'right' | 'top';

export type TGlobalConfig = {
  fontSize?: TSize;
  lineHeight?: TSize;
  margin?: TSize;
};

export type THeaderConfig = {
  placement?: TPlacement;
  picture?: {
    size?: TSize;
    square?: boolean;
  };
};

export type TTitleConfig = {
  size?: TSize;
  bold?: boolean;
  italic?: boolean;
};

export type TSectionConfig = {
  title?: TTitleConfig;
  itemTitle?: TTitleConfig;
  itemSubtitle?: TTitleConfig;
};

export type TFooterContent = 'page' | 'name';

export type TFooterConfig = {
  show?: boolean;
  placement?: TPlacement;
  content?: TFooterContent[];
};

export default interface Config {
  global?: TGlobalConfig;
  header?: THeaderConfig;
  section?: TSectionConfig;
  footer?: TFooterConfig;
}
