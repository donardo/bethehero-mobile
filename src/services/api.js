import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-bethehero-back.herokuapp.com'
    //baseURL: 'http://192.168.0.104:3333'
});

export default api;