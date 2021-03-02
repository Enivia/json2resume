import { merge } from 'lodash';
import { useContext } from 'react';
import {
  defaultFooterConfig,
  defaultGlobalConfig,
  defaultHeaderConfig,
  defaultSectionConfig,
} from '../constants';
import ResumeConfig from '../interfaces/config';
import ResumeConfigContext from '../resume-config-context';

export default function useResumeConfig(): Required<ResumeConfig> {
  const values = useContext(ResumeConfigContext);
  if (!values) {
    throw Error('cannot useResumeConfig without context provider');
  }

  const { global, header, section, footer } = values.config;

  return {
    global: merge({}, defaultGlobalConfig, global),
    header: merge({}, defaultHeaderConfig, header),
    section: merge({}, defaultSectionConfig, section),
    footer: merge({}, defaultFooterConfig, footer),
  };
}
