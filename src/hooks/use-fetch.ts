import {useEffect, useState} from 'react';
import api from '~/services/index';

export const useFetch = ({path}: {path: string}) => {
  // Initial state
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Execute axios get method to perform query

    api
      .get(path)
      .then(({data}) => {
        setResponse(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  // destructuring an return an object tht conatin the response
  return {loading, response};
};

export default useFetch;
