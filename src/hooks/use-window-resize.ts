import { useEffect } from 'react';
import { throttle } from 'lodash';

export default function useWindowResize(callback: Function) {
  useEffect(() => {
    const handleResize = throttle(() => {
      callback && callback();
    }, 200);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [callback]);
}
