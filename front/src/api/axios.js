import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://codesafio-back-gh4psjujy-otorres828.vercel.app'
});
