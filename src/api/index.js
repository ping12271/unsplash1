import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com'
})

const request = (method, url, data) => {
    try {
        const config = {
            url,
            method,
            params: data
        }
        return axiosInstance(config)
    } catch(e) {

    }
}

const Api = {
    getPhotos: (data) => request('get', '/photos', data),
    searchPhotos: (data) => request('get', '/search', data),
    getTopics: (data) => request('get', '/topics', data),
    getTopicBySlug: (slug, data) => request('get', `/topics/${slug}`, data),
}
export default Api;