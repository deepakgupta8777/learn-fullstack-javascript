//fetch the data from the api

import axios from 'axios';
import config from './config';

axios.get(`${config.serverUrl}/api/contests`)
  .then(resp => {
    console.log(resp.data);
  })
  .catch(error => {
    console.log(error);
    
    console.error()
  });