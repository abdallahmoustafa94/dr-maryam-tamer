import React from 'react';

const useMediaQuery = (query) => {
  const mediaQuery = typeof window !== 'undefined' && window.matchMedia(query);
  const [matches, setMatches] = React.useState(mediaQuery.matches);

  const handleChange = (event) => {
    setMatches(event.matches);
  };

  React.useEffect(() => {
    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
