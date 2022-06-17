import auth from './auth';
import baseURL from './base-vars';

const axios = require('axios').default;

export default {
  async getEmployees(page) {
    let employeesData;
    console.log('getEmps');
    await axios({
      method: 'GET',
      url: `${baseURL}/workers?page=${page}`,
      headers: {
        Authorization: `Bearer ${await auth.getToken()}`,
      },
    }).then((response) => {
      console.log('employees: ', response.data);
      employeesData = response.data.data;
    }).catch((error) => {
      console.log('ERROR: GET_employeeS', error);
    });
    return employeesData;
  },
  async getEmployeeById(id) {
    console.log(`Get employee by id: ${id}`);
    let employee;
    await axios({
      method: 'GET',
      url: `${baseURL}/workers/${id}`,
      headers: {
        Authorization: `Bearer ${await auth.getToken()}`,
      },
    }).then((response) => {
      console.log('employee by id: ', response.data);
      employee = response.data;
    }).catch((error) => {
      console.log('ERROR: GET_employeeS', error);
    });
    return employee;
  },
  async getPageAmount() {
    const token = await auth.getToken();
    const res = await fetch(`${baseURL}/workers`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const employeeList = await res.json();
    const pageAmount = await employeeList.last_page;
    return pageAmount;
  },
};
