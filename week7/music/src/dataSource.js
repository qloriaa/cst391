import axios from 'axios';

export default axios.create({
    // MusicAPI Service Port = 5000
    baseURL: 'http://localhost:5000'
});