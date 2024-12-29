import axios from '../helper/api';
import { useEffect, useState } from 'react';
import { getUsername } from '../helper/helper';

export default function useFetch(query) {
  const [getData, setData] = useState({ apiData: undefined, status: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev }));

        let { username } = !query ? await getUsername() : '';

        const { data, status } = !query
          ? await axios.get(`/user/${username}`)
          : await axios.get(`/user/${query}`);

        if (status == 200) {
          setData((prev) => ({ ...prev, apiData: data, status: status }));
        }
      } catch (error) {
        setData(() => ({
          apiData: error?.message,
          message: 'User Not Found',
        }));
      }
    };

    fetchData();
  }, [query]);

  return [getData, setData];
}
