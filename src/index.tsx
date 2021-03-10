import * as React from 'react';
import { throttle } from 'lodash';
import ResumeConfigContext, { ConfigContextValue } from './resume-config-context';
import ResumeConfig from './interfaces/config';
import Resume from './interfaces/resume';
import { setGlobalVariable } from './utils';
import Layout, { LayoutInstance } from './layout';

import './index.less';

export interface ResumeInstance {
  switchPage: (direction: 'forward' | 'backward') => void;
}

interface Props {
  resume: Resume;
  config?: ResumeConfig;
}

const Json2Resume = React.memo(
  React.forwardRef<ResumeInstance, Props>((props, ref) => {
    const { resume, config } = props;
    const [page, setPage] = React.useState<number>(1);

    const containerRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      const handleResize = throttle(() => {
        const container = containerRef.current;
        if (container) {
          const parentHeight = container.parentElement?.clientHeight || 600;
          const height = container.clientHeight;
          container.style.transform = `scale(${parentHeight / height})`;
        }
      }, 200);

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const layoutRef = React.useRef<LayoutInstance>(null);
    const switchPage = React.useCallback(
      (direction: 'forward' | 'backward') => {
        const layout = layoutRef.current;
        if (!layout) return;
        const newPage = direction === 'forward' ? page + 1 : page - 1;
        const total = layout.getTotalPages();
        if (newPage > 0 && newPage <= total) {
          setPage(newPage);
        }
      },
      [page]
    );

    React.useImperativeHandle(ref, () => ({ switchPage }));

    const configContextValue = React.useMemo<ConfigContextValue>(() => {
      const { global, header, section, footer } = config || {};
      // update css variables
      setGlobalVariable(global);
      const configValue: ResumeConfig = { global, header, section, footer };
      return { config: configValue };
    }, [config]);

    return (
      <ResumeConfigContext.Provider value={configContextValue}>
        <div className="json2resume-renderer-container" ref={containerRef}>
          <Layout ref={layoutRef} resume={resume} page={page} />
        </div>
      </ResumeConfigContext.Provider>
    );
  })
);

export default Json2Resume;
