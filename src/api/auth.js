import baseURL from './base-vars';

const axios = require('axios').default;

export default {
  async getToken(payload) {
    let code;
    await axios({
      method: 'POST',
      url: `${baseURL}/auth/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    }).then((response) => {
      localStorage.setItem('authToken', response.data.token);
      code = true;
    }).catch((error) => {
      console.log('ERROR: GET_TOKEN', error);
      code = false;
    });
    return code;
  },
  async getRestoreToken() {
    await axios({
      method: 'POST',
      url: `${baseURL}/auth/restore`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: 'libradrago79@gmail.com',
      },
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log('ERROR: GET_TOKEN', error);
    });
  },
};
