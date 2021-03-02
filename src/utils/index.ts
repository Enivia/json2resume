import { TGlobalConfig, TSize } from '../interfaces/config';

const configVariableMap: Record<string, string> = {
  primaryColor: '--primary-color',
  fontSize: '--font-size',
  lineHeight: '--line-height',
  padding: '--padding',
};

const lineHeightValues: Record<TSize, string> = {
  s: '1.2em',
  m: '1.5em',
  l: '1.8em',
};

const paddingValues: Record<TSize, string> = {
  s: '12px',
  m: '24px',
  l: '48px',
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
