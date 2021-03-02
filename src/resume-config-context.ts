import { createContext } from 'react';
import Config from './interfaces/config';

export type ConfigContextValue = { config: Config };

const ResumeConfigContext = createContext<ConfigContextValue>({ config: {} });

export default ResumeConfigContext;
