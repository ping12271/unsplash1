import axios from "axios";

const fetchConstants = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
    }
})

const request = (method, url, data) => {
    try {
        const config = {
            url,
            method,
        }

        if(method === fetchConstants.GET) {
            config.params = data
        } else {
            config.data = data
        }

        return axiosInstance(config)
    } catch(e) {
        console.log('@@ e', e)
    }
}

const Api = {
    getPhotos: (data) => request(fetchConstants.GET, '/photos', data),
    searchPhotos: (data) => request(fetchConstants.GET, '/search', data),
    getTopics: (data) => request(fetchConstants.GET, '/topics', data),
    getTopicBySlug: (slug, data) => request(fetchConstants.GET, `/topics/${slug}`, data),
    getTopicPhotos: (slug, data) => request(fetchConstants.GET, `/topics/${slug}/photos`, data)
}

export default Api;