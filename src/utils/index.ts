import { TGlobalConfig, TSize } from '../interfaces/config';

const configVariableMap: Record<string, string> = {
  primaryColor: '--primary-color',
  fontSize: '--font-size',
  lineHeight: '--line-height',
  padding: '--padding',
};

const lineHeightValues: Record<TSize, string> = {
  xs: '1.15em',
  s: '1.3em',
  m: '1.5em',
  l: '1.6em',
  xl: '1.75em',
};

const paddingValues: Record<TSize, string> = {
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '36px',
  xl: '48px',
};

export function setGlobalVariable(config?: TGlobalConfig) {
  const globalConfig = config || {};
  const root = document.documentElement;
  Object.entries(globalConfig).map(([key, value]) => {
    let variable = value as string;
    switch (key) {
      case 'lineHeight':
        variable = lineHeightValues[value as TSize];
        break;
      case 'padding':
        variable = paddingValues[value as TSize];
        break;
    }
    root.style.setProperty(configVariableMap[key], variable);
  });
}
