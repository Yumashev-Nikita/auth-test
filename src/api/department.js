import auth from './auth';
import baseURL from './base-vars';

const axios = require('axios').default;

export default {
  async getEmployees(page) {
    let employeesData;
    await axios({
      method: 'GET',
      url: `${baseURL}/workers?page=${page}`,
      headers: {
        Authorization: `Bearer ${await auth.getToken()}`,
      },
    }).then((response) => {
      employeesData = response.data;
    }).catch((error) => {
      console.log('ERROR: GET_employeeS', error);
    });
    return employeesData;
  },
  async getEmployeeById(id) {
    let employee;
    await axios({
      method: 'GET',
      url: `${baseURL}/workers/${id}`,
      headers: {
        Authorization: `Bearer ${await auth.getToken()}`,
      },
    }).then((response) => {
      employee = response.data;
    }).catch((error) => {
      console.log('ERROR: GET_employeeS', error);
    });
    return employee;
  },
};
