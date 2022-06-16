// import auth from '../auth/auth';

export default {
  async getToken() {
    console.log('getToken');
    const res = await fetch('https://test.atwinta.online/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'libradrago79@gmail.com',
        password: '6pYIYy5wCN',
      }),
    });
    const data = await res.json();
    return data.token;
  },
};
