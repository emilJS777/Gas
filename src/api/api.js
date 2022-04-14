import axios from "axios";
axios.defaults.baseURL = 'http://185.183.182.157:5001/api/';
let refresh = false;
axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 200 && !refresh ) {
        refresh = true;
        const response = await axios.put('refresh', {}, { withCredentials: true });
        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;
            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});
