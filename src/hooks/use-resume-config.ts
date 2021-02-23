import { useContext } from 'react';
import ResumeConfigContext from '../resume-config-context';

export default function useResumeConfig() {
  const values = useContext(ResumeConfigContext);
  if (!values) {
    throw Error('cannot useResumeConfig without context provider');
  }
  return values.config;
}
