import axios from 'axios';

const KEY = 'AIzaSyAl194cfW3TcXMS1gbdLuXZjkp4DCEMoho';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

