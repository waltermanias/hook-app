import { useState, useEffect } from "react";

export const useFetch = (url) => {
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
        setState({
          data,
          loading: false,
          error: null,
        });
      })
      .catch((err) => {
        setState({
          data: null,
          loading: false,
          error: err,
        });
      });
  }, [url]);

  return state;
};

// https://www.breakingbadapi.com/api/quotes/1
