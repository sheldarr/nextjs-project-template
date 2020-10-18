import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) =>
  axios.get<string[]>(url).then(({ data }) => data);

const useGreatOldOnes = () => useSWR('/api/greatOldOnes', fetcher);

export default useGreatOldOnes;
