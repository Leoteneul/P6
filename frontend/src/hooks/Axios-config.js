
import axios from 'axios'


// Request without files

export const client = axios.create({
    baseURL: 'http://localhost:3000/api',
                
  });
client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('id');

        if (token) {
            config.headers['Authorization'] = token;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);
client.interceptors.response.use(
    response => response.data,
    error => {
      alert(error.response.data.message)
    });
   
  

// Request with Files
export const clientMultipart = axios.create({
    baseURL: 'http://localhost:3000/api',

    headers: {
            "Content-Type": "multipart/form-data",  
              Authorization: localStorage.getItem('id')
      			},
    
    
  });


clientMultipart.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('id');

        if (token) {
            config.headers['Authorization'] = token;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);
clientMultipart.interceptors.response.use(
    response => response.data,
    error => {
      alert(error.response.data.message)
    });

  
