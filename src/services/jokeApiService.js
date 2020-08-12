import axios from 'axios';
import { API_URI } from '../constants/envConfig';

/**
 * Serviço responsável por fazer chamadas a Geek joke API e retornar o valor
 */

/** Pega uma piada na API */
const getJoke = () =>{
  return axios.get(API_URI+'?format=json');
}

export default {
  getJoke
};