import { createContext } from 'react';
import Config from './interfaces/config';

export type ResumeConfigContextValue = { config?: Config };

const ResumeConfigContext = createContext<ResumeConfigContextValue>({});

export default ResumeConfigContext;
