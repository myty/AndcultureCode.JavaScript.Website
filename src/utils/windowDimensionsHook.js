import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const dimensions = {
    height: 0,
    width:  0
  };

  if (window) {
    dimensions.height = window.innerHeight;
    dimensions.width  = window.innerWidth;
  }

  return dimensions;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (window) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    return () => {};
  }, []);

  return windowDimensions;
}