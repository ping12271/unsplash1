import axios from "axios";

const baseUrl = 'https://api.unsplash.com';

const Api = {
    getPhotos: (data) => axios({
        method: 'get',
        url: baseUrl + '/photos',
        params: data
    })
}
export default Api;