//cross-origin URL for localhost production build
const env = process.env.NODE_ENV || 'development';
export var API_URL = 'https://localhost:5000/api';


/*if (env !== 'development') {
    API_URL =  'https://hidalgo.herokuapp.com';
}*/

