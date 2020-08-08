import axios from 'axios';

const getJoke = () =>{
  return axios.get('https://geek-jokes.sameerkumar.website/api?format=json');
}

export default {
  getJoke
};