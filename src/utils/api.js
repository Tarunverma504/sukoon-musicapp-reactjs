import axios from 'axios';
import { setAuthHeader } from './function';

export const get = async (url) => {
  setAuthHeader();
  
  const result = await axios.get(url);
  return result;

};
