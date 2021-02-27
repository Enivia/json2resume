import { lineHeightValues, paddingValues } from '../constants';
import { TGlobalConfig, TSize } from '../interfaces/config';

const configVariableMap: Record<string, string> = {
  primaryColor: '--primary-color',
  fontSize: '--font-size',
  lineHeight: '--line-height',
  padding: '--padding',
};

export function setGlobalVariable(config: TGlobalConfig) {
  const root = document.documentElement;
  Object.entries(config).map(([key, value]) => {
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
