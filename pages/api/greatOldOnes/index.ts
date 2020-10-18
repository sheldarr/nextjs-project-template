import { NextApiRequest, NextApiResponse } from 'next';
import StatusCodes from 'http-status-codes';

const GREAT_OLD_ONES: string[] = [
  'Bokrug',
  'Cthulhu',
  'Cthugha',
  'Dagon',
  'Glaaki',
  'Golgoroth',
  'Hastur',
  'Idh-yaa',
  'Ithaqua',
  'Nyogtha',
  'Shudde M’ell',
  'Tsathoggua',
  'Yig',
  'Zulchequon',
];

export default (req: NextApiRequest, res: NextApiResponse<string[]>) => {
  res.status(StatusCodes.OK).json(GREAT_OLD_ONES);
};
