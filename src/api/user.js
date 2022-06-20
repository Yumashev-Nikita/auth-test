import baseURL from './base-vars';

const axios = require('axios').default;

export default {
  async getUser() {
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
  async updateUser(payload) {
    let profileData;
    await axios({
      method: 'POST',
      url: `${baseURL}/user`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      data: payload,
    }).then((response) => {
      profileData = response.data;
    }).catch((error) => {
      console.log('ERROR: GET_employeeS', error);
    });
    return profileData;
  },
};
