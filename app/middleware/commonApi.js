import axios from 'axios';
import config from '../config';

const {itunesApi} = config;

const commonApi = {
  searchItunes: (data) => {
    return axios.get(`${itunesApi}search?term=${data}&limit=25&media=music`);
  },
};

export default commonApi;
