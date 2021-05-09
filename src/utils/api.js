import axios from 'axios';
import { setAuthHeader } from './function';

export const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  console.log(result);
  return result;

};
