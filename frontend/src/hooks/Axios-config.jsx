
const axios = require('axios')
const userId = localStorage.getItem('id')


const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: userId,
    },
  });

  export default instance