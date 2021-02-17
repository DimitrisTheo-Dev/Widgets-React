import { useEffect, useState } from 'react';

type EndpointI = {
  path: string;
  children: string;
}


const Route = ({ path, children }: EndpointI): string | null => {
  //this exists just to get route to update
  const [currentPath, setCurrentPath] =  useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);

  return currentPath  === path ? children : null;
};

export default  Route;