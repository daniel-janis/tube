import axios from 'axios';

const KEY = 'AIzaSyBG9J-cgTfCFbzY-C1upok1OyPVmvOQ49s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

