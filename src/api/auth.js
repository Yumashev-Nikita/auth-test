const axios = require('axios').default;

export default {
  async getToken() {
    let token;
    await axios({
      method: 'POST',
      url: 'https://test.atwinta.online/api/v1/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: 'libradrago79@gmail.com',
        password: '6pYIYy5wCN',
      },
    }).then((response) => {
      const resp = response.data;
      token = resp.token;
    }).catch((error) => {
      console.log('ERROR: GET_TOKEN', error);
    });
    return token;
  },
};
