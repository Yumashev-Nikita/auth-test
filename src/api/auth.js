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
      data: {
        email: payload.email,
        password: payload.password,
      },
    }).then((response) => {
      localStorage.setItem('authToken', response.data.token);
      code = true;
    }).catch((error) => {
      console.log('ERROR: GET_TOKEN', error);
      code = false;
    });
    return code;
  },
};
