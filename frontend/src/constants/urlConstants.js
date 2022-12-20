//cross-origin URL for localhost production build
const env = process.env.NODE_ENV || 'development';
export const API_URL =  'https://hidalgo.herokuapp.com';

if (env !== 'development') {
    API_URL = 'https://hidalgo.herokuapp.com'
}