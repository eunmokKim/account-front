import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/', // 공통 API prefix
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000, // 5초 타임아웃 등 필요에 따라 설정
});

api.interceptors.request.use(
    (res) => res,
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },

);


export default api;