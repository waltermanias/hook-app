import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      })
      .catch((err) => {
        if (isMounted.current) {
          setState({
            data: null,
            loading: false,
            error: err,
          });
        }
      });
  }, [url]);

  return state;
};

// https://www.breakingbadapi.com/api/quotes/1
