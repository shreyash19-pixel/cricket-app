import axios from 'axios';
import { useState } from 'react';

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, payload);
      setData(response.data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  return { data, loading, error, postData };
};

export default usePost;
