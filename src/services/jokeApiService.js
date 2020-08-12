import axios from 'axios';
import { API_URI } from '../constants/envConfig';

const getJoke = () =>{
  return axios.get(API_URI+'?format=json');
}

export default {
  getJoke
};