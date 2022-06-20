import baseURL from './base-vars';

const axios = require('axios').default;

export default {
  async getEmployees(page) {
    let employeesData;
    await axios({
      method: 'GET',
      url: `${baseURL}/workers?page=${page}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    }).then((response) => {
      employee = response.data;
    }).catch((error) => {
      console.log('ERROR: GET_employeeS', error);
    });
    return employee;
  },
};
