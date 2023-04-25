import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getGreatOldOnes = async () => {
  const { data } = await axios.get<string[]>('/api/greatOldOnes');

  return data;
};

const useGreatOldOnes = () =>
  useQuery({
    queryFn: getGreatOldOnes,
    queryKey: ['greatOldOnes'],
  });

export default useGreatOldOnes;
