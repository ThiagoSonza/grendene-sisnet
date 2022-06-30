import axios from 'axios';

// ##################
// AXIOX CFG TO LOGIN
// ##################
const authAPI = axios.create({
    baseURL: 'http://localhost:49740'
})

// ##################
// AXIOX CFG TO LOGIN
// ##################
const rhData = axios.create({
    baseURL: 'https://localhost'
})
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export { authAPI, rhData };

