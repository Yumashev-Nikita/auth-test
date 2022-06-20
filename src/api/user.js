import baseURL from './base-vars';

const axios = require('axios').default;

export default {
  async getProfile() {
    let profileData;
    await axios({
      method: 'GET',
      url: `${baseURL}/user`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    }).then((response) => {
      profileData = response.data;
    }).catch((error) => {
      console.log('ERROR: GET_employeeS', error);
    });
    return profileData;
  },
};
