import axios from "axios";

const baseUrl = 'https://api.unsplash.com';

const Api = {
    getPhotos: (data) => axios({
        method: 'get',
        url: `${baseUrl}/photos`,
        params: data
    }),
    searchPhotos: (data) => axios({
        method: 'get',
        url: `${baseUrl}/search`,
        params: data
    }),
    getTopics: (data) => axios({
        method: 'get',
        url: `${baseUrl}/topics`,
        params: data
    }),
    getTopicBySlug: (slug, data) => axios({
        method: 'get',
        url: `${baseUrl}/topics/${slug}`,
        params: data
    }),
}
export default Api;