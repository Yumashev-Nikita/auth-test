import auth from './auth';

const axios = require('axios').default;

export default {
  async getEmps(page) {
    let empsData;
    await axios({
      method: 'GET',
      url: `https://test.atwinta.online/api/v1/workers?page=${page}`,
      headers: {
        Authorization: `Bearer ${await auth.getToken()}`,
      },
    }).then((response) => {
      console.log('emps: ', response.data);
      empsData = response.data.data;
    }).catch((error) => {
      console.log('ERROR: GET_EMPS', error);
    });
    return empsData;
  },
  async getEmpById(id) {
    console.log(`Get emp by id: ${id}`);
    let emp;
    await axios({
      method: 'GET',
      url: `https://test.atwinta.online/api/v1/workers/${id}`,
      headers: {
        Authorization: `Bearer ${await auth.getToken()}`,
      },
    }).then((response) => {
      console.log('emp by id: ', response.data);
      emp = response.data;
    }).catch((error) => {
      console.log('ERROR: GET_EMPS', error);
    });
    return emp;
  },
  async getPageAmount() {
    const token = await auth.getToken();
    const res = await fetch('https://test.atwinta.online/api/v1/workers', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const empList = await res.json();
    const pageAmount = await empList.last_page;
    return pageAmount;
  },
};
