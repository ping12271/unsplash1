const initialState = {
    list: [],
    searchResult: {},
    topics: [],
    topicBySlug: {},
    photoById: {},
    photoRelated: {}
}

export const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',
        GET_PHOTOS: 'GET_PHOTOS',
        SET_PHOTOS: 'SET_PHOTOS',
        SET_PHOTO_BY_ID: 'SET_PHOTO_BY_ID',
        SET_PHOTO_RELATED: 'SET_PHOTO_RELATED',
        SEARCH_PHOTOS: 'GET_SEARCH_PHOTOS',
        SET_SEARCH_RESULT: 'SET_SEARCH_RESULT',
        GET_TOPIC_BY_SLUG: 'GET_TOPIC_BY_SLUG',
        SET_TOPIC_BY_SLUG: 'SET_TOPIC_BY_SLUG',
        GET_TOPICS: 'GET_TOPICS',
        SET_TOPICS: 'SET_TOPICS',
        OPEN_PHOTO_POPUP: 'OPEN_PHOTO_POPUP'
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        getPhotos: (payload) => {
            return {
                type: Action.Types.GET_PHOTOS,
                payload
            }
        },
        setPhotos: (payload) => {
            return {
                type: Action.Types.SET_PHOTOS,
                payload
            }
        },
        setPhotoById: (payload) => ({
           type: Action.Types.SET_PHOTO_BY_ID,
           payload
        }),
        setPhotoRelated: (payload) => ({
            type:Action.Types.SET_PHOTO_RELATED,
            payload
        }),
        searchPhotos: (payload) => {
            return {
                type: Action.Types.SEARCH_PHOTOS,
                payload
            }
        },
        setSearchResult: (payload) => {
            return {
                type: Action.Types.SET_SEARCH_RESULT,
                payload
            }
        },
        getTopics: (payload) => {
          return {
              type: Action.Types.GET_TOPICS,
              payload
          }
        },
        setTopics: (payload) => {
            return {
                type: Action.Types.SET_TOPICS,
                payload
            }
        },
        getTopicBySlug: (slug, payload) => {
            return {
                type: Action.Types.GET_TOPIC_BY_SLUG,
                slug,
                payload
            }
        },
        setTopicBySlug: (payload) => {
            return {
                type: Action.Types.SET_TOPIC_BY_SLUG,
                payload
            }
        },
        openPhotoPopup: (payload) => {
            return {
                type: Action.Types.OPEN_PHOTO_POPUP,
                payload
            }
        },
    },

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case Action.Types.SET_PHOTOS: {
            return {
                ...state,
                list: action.payload
            }
        }
        case Action.Types.SET_PHOTO_BY_ID: {
            return {
                ...state,
                photoById: action.payload
            }
        }
        case Action.Types.SET_PHOTO_RELATED: {
            return {
                ...state,
                photoRelated: action.payload
            }
        }
        case Action.Types.SET_SEARCH_RESULT: {
            return {
                ...state,
                searchResult: action.payload
            }
        }
        case Action.Types.SET_TOPICS: {
            return {
                ...state,
                topics: action.payload
            }
        }
        case Action.Types.SET_TOPIC_BY_SLUG: {
            return {
                ...state,
                topicBySlug: action.payload
            }
        }
    }
}

export default reducer;